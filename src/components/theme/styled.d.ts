import "styled-components";
import { ThemeTypes } from "./types";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeTypes {}
}
