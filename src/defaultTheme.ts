import "styled-components";
declare module "styled-components" {
    export interface DefaultTheme {
        name: string;
        background: string;
        color: string;
        navbar: string;
        navbarHover: string;
        input: string;
        inputColor: string;
        addBackground: string;
        border: string;
        add2Background: string;
    }
}

export interface Theme {
    name: string;
    color: string;
    background: string;
    navbar: string;
    navbarHover: string;
    input: string;
    inputColor: string;
    addBackground: string;
    border: string;
    add2Background: string;
}

export const themes = {
    light: {
        name: "light",
        color: "black",
        background: "white",
        navbar: "#E6E6E6",
        navbarHover: "#d6d6d6",
        input: "white",
        inputColor: "#212529",
        addBackground: "white",
        border: "#bdbdbd",
        add2Background: "#EFF1F1",
    },
    dark: {
        name: "dark",
        color: "white",
        background: "#1C1A1A",
        navbar: "#434343",
        navbarHover: "#3B3B3B",
        input: "#494848",
        inputColor: "white",
        addBackground: "#2B2828",
        border: "grey",
        add2Background: "#252222",
    },
};
