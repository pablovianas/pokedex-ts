import "styled-components";

declare module "styled-components" {
   export interface DefaultTheme {
       [key: string]: any;
       light: {
           backgroundBase: string;
           backgroundLevel1: string;
           backgroundLevel2: string;
           borderBase: string;
           textColorBase: string;
       };
       dark: {
           backgroundBase: string;
           backgroundLevel1: string;
           backgroundLevel2: string;
           borderBase: string;
           textColorBase: string;
       };
   }
}
