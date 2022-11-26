import { createGlobalStyle } from "styled-components"

export const LightTheme={
    body:"#fff",
    fontColor:"black",
    color:"black",
    textColor:"black",
}

 export const darkTheme={
    body:"honeydew",
    // body:"black",
    fontColor:"white !important",
    // textColor:"black",
    // color:"black"
    
    
};

export const GlobalStyle=createGlobalStyle`

body {
    background-color:${(props)=>props.theme.body};
    color:${(props)=>props.theme.color};
    fontColor:${(props)=>props.theme.body}
    
}

`
export const GlobalTextStyle=createGlobalStyle`

color {
    color:${(props)=>props.theme.color};

}

`