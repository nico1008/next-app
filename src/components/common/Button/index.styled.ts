import styled from "styled-components"

export const Button = styled.button`
    display: flex;
    flex: 0 0 auto;
    width: 50px;
    height: 50px;
    margin: 0px 0px 0px 20px;
    border-radius: 50px;
    border: 0;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.SwitcherColor1};
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor} ;
    color: ${props => props.theme.White};
    &:hover{
        background-color: ${props => props.theme.SwitcherColor2};
        color: white;
        transition: 1s;
        rotate:360deg;
    }
    &:focus{
        outline: none;   
    }
    cursor: pointer;
    transition: 1s;

`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.div`  
    display: flex;
    width: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.textSizeTextL};
    font-weight: 600;
`;


