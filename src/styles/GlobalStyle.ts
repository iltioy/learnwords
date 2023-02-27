import { createGlobalStyle } from "styled-components";
import { Theme } from "../defaultTheme";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
    }
`;
