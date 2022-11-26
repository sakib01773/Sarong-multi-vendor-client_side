import React from 'react';
import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, LightTheme,GlobalStyle } from './Theme';


const StyledApp=styled.div`
color: ${(props)=>props.theme.fontColor};
`;

const DarkAndWhiteTheme = () => {

    const  [theme,setTheme]=useState("light");

    

    const themeToggler=()=>{
          theme==="light" ? setTheme("dark") : setTheme("light");
    }
    return (
        <div>
            <ThemeProvider
            theme={theme==="light" ? LightTheme : darkTheme}
            >
              <GlobalStyle></GlobalStyle>
                <StyledApp>Hello world

                    <button onClick={()=>themeToggler()}>Change Theme</button>
                </StyledApp>

            </ThemeProvider>
            
        </div>
    );
};

export default DarkAndWhiteTheme;