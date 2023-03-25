import * as React from "react";

type CodeProps = {
  codeString: string;
  withLineNumbers?: boolean;
  highlight?: string;
  title?: string;
  className: GetLanguageInput;
};

import { useColorMode } from "theme-ui";
import Highlight, { defaultProps, Prism } from "prism-react-renderer";
import {
  calculateLinesToHighlight,
  getLanguage,
  GetLanguageInput
} from "@lekoarts/themes-utils";
import Copy from "@lekoarts/gatsby-theme-minimal-blog/src/components/copy";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import {
  lightTheme,
  darkTheme
} from "@lekoarts/gatsby-theme-minimal-blog/src/utils/prism-themes";

// import "../styles/prism-atom-dark.css";
import kotlinLang from "../../../syntax/kotlin";
import haskellLang from "../../../syntax/haskell";

kotlinLang(Prism);
haskellLang(Prism);

function getParams(className = ``) {
  const [lang = ``, paramsStr = ``] = className.split(`:`);

  const params: { [key: string]: string } = paramsStr
    .split(`&`)
    .reduce((merged, param) => {
      const [key, value] = param.split(`=`);
      // @ts-ignore
      merged[key] = value;
      return merged;
    }, {});

  const gitLink = params.github
    ? "https://github.com/" + params.github
    : params.gist
    ? "https://gist.github.com/" + params.gist
    : null;

  return {
    gitLink,
    title: params.title,
    language: getLanguage(
      // @ts-ignore: it expects declare type GetLanguageInput = `language-${Language}` | "";, but we can't prove it suits this format
      lang
    )
  };
}

const Code = ({
  codeString,
  withLineNumbers = false,
  className: blockClassName,
  highlight = ``
}: CodeProps) => {
  const { showLineNumbers, showCopyButton } = useMinimalBlogConfig();
  const [colorMode] = useColorMode<"light" | "dark">();
  const isDark = colorMode === `dark`;

  const { language, gitLink, title = `` } = getParams(blockClassName);

  const shouldHighlightLine = calculateLinesToHighlight(highlight);
  const shouldShowLineNumbers = withLineNumbers || showLineNumbers;

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      // @ts-ignore
      language={language}
      theme={isDark ? darkTheme : lightTheme}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <React.Fragment>
          <div
            className={`gatsby-highlight ${
              (gitLink && "with-github-link") || ""
            }`}
            data-language={language}
          >
            {title && (
              <div className="code-title">
                <div>{title}</div>
              </div>
            )}
            <pre className={className} data-linenumber={shouldShowLineNumbers}>
              {showCopyButton && <Copy content={codeString} fileName={title} />}
              <code className={`code-content language-${language}`}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i });

                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} highlight-line`;
                    lineProps.style = {
                      ...lineProps.style,
                      backgroundColor: `var(--theme-ui-colors-highlightLineBg)`
                    };
                  }

                  return (
                    <div {...lineProps}>
                      {shouldShowLineNumbers && (
                        <span className="line-number-style">{i + 1}</span>
                      )}
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>
          {gitLink && (
            <a className="gatsby-highlight--github--container" href={gitLink}>
              GitHub
            </a>
          )}
        </React.Fragment>
      )}
    </Highlight>
  );
};

export default Code;
