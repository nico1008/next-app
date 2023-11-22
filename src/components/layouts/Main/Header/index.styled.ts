import styled from 'styled-components';

export const Header = styled.header`
    display: flex; 
    width: 100%;
    min-height: 100px;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textColor4};
    box-shadow: 0px 5px 10px ${props => props.theme.accentColor1};
    background-color: ${props => props.theme.backgroundColor1};
    top: 0;
    position: sticky;
    overflow: hidden;
    z-index: 50;
    @media (max-width: 768px) and (min-width: 576px)  { 
        min-height: 60px;
    }
    @media (max-width: 576px)  {
        min-height: 60px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    background-color:  ${props => props.theme.backgroundColor1};
    box-sizing: border-box;

    @media (min-width: 1200px){
        width: 1300px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  {     
        width: 100%;
    }
    @media (max-width: 576px)  {   
        width: 100%;
    }
`;

export const Logo = styled.div`
    display: flex;
    width: 100%;
    flex: 1 1 auto; 
    flex-direction: row;
    align-items: flex-start;
    margin: 10px 0px;
    
`;
import { keyframes } from "styled-components";

const hueAnimation = keyframes`
0% {
    transform: scale(1) ;
    filter: hue-rotate(0deg);
  }
  25% {
    transform: scale(1.2) ;
    filter: hue-rotate(90deg);
  }
  50% {
    transform: scale(1.1) ;
    filter: hue-rotate(180deg);
  }
  75% {
    transform: scale(1.2) ;
    filter: hue-rotate(270deg);
  }
  100% {
    transform: scale(1) ;
    filter: hue-rotate(360deg);
  }
`;


export const Img = styled.img`
    display: flex;
    height: 60px;
    border: 3px solid;
    border-color:${props => props.theme.headercolor2};
    border-radius: 50%;
    box-shadow: 0px 0px 6px #000000;
    transition: transform 0.3s ease-in-out;

    &:hover {
        animation: ${hueAnimation} 3s ease-in-out infinite;
    }
`;
export const Name1 = styled.span`
    display: flex;
    align-items: center;
    border-top-left-radius:  5px;
    border-bottom-left-radius:  5px;
    color: ${props => props.theme.ColorWhite} ;
    font-size: ${props => props.theme.textSizeTextL};
    font-weight: 600;
    font-family: Roboto;
    letter-spacing: 1px;
    margin: 16px 0px 0px 20px;
    padding: 4px 4px 4px 8px;
    background-color: #292929;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const Name2 = styled.span`
    display: flex;
    align-items: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius:  5px;

    color:  ${props => props.theme.colorBlack} ;
    font-size: ${props => props.theme.textSizeTextL};
    font-weight: 600;
    font-family: Roboto;
    letter-spacing: 1px;
    margin: 16px 0px 0px 0px;
    padding: 4px 4px 4px 4px;
    background-color: #ffa31a;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const Buttons = styled.div`
   display:flex;
`;

