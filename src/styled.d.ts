import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      main: string;
      bold: string;
      regular: string;
      description: string,
    };
    bgColors: {
      main: string;
      header: string;
      footer: string;
      border: string;
      divider: string;
    };
    textColors: {
      main: string;
      primary: string;
      secondary: string;
      green: string;
      red: string;
    };
  }
}