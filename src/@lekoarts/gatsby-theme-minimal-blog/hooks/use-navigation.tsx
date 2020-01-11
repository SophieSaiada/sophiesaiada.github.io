import { graphql, useStaticQuery } from "gatsby"

type Props = {
  site: {
    siteMetadata: {
      navigation: {
        title: string
        slug: string
      }[]
    }
  }
}

const useNavigation = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          navigation {
            title {
              he
              en
            }
            slug {
              he
              en
            }
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.navigation
}

export default useNavigation
