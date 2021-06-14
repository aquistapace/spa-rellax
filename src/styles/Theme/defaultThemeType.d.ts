import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    spotlightColor: string;
    background: string;
    textColor: string;
    lightGrey: string;
    fontDefault: string;
  }
}
