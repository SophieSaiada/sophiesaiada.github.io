export const getDirection = (content: string) =>
  /[\u05D0-\u05EB]/.test(content) ? "rtl" : "ltr";
