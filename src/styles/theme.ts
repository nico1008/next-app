import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor1: "#03045e",
  backgroundColor2: "#153243",

  colorBlack: "#000000",
  ColorWhite: "#FFFFFF",

  WhiteAndBlack: "#FFFFFF", 
  BlackAndWhite: "#000000",  

  accentColor1: "#120d31",
  accentColor2: "#ff6392",
  accentColor3: "#ff0a54",
  accentColor4: "#ff0a54",
  
  textColor: "#F5F5F5",
  infoIconColor: "#2D2F34",
  SwitcherColor1: "#ffa31a",
  SwitcherColor2: "#48cae4",

  iconColor: "#03045e",
  CardColor: "#02c39a",
  
  shadowColor: "rgba(0,0,0,0.2)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "19px",
  textSizeTextL700: "18px",
  textSizeTextL500: "17px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "25px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  textSizeTextN: "27px",
  textSizeTextN900: "27px",
  textSizeTextN700: "25px",
  textSizeTextN500: "23px",

  borderRadius: "15px",
};

export const lightTheme = {
  backgroundColor1: "#48cae4",
  backgroundColor2: "#caf0f8",

  colorBlack: "#000000",
  ColorWhite: "#FFFFFF",

  WhiteAndBlack: "#000000", 
  BlackAndWhite: "#FFFFFF",

  accentColor1: "#613dc1",
  accentColor2: "#f4442e",
  accentColor3: "#ff0a54",
  accentColor4: "#8338ec",

  textColor: "black",
  infoIconColor: "#FAFAFA",
  SwitcherColor1: "#ffa31a",
  SwitcherColor2: "#03045e",


  iconColor: "#48cae4",
  CardColor: "#02c39a",

  shadowColor: "rgba(0,0,0,0.2)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "19px",
  textSizeTextL700: "18px",
  textSizeTextL500: "17px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "25px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  textSizeTextN: "27px",
  textSizeTextN900: "27px",
  textSizeTextN700: "25px",
  textSizeTextN500: "22px",

  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Roboto';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
`;
