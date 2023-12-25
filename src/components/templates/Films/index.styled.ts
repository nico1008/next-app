import styled from 'styled-components';

export const Films = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.backgroundColor2};
    transition: 0.1s;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1100px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
   
    @media (min-width: 1200px){
        width: 1500px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;
export const GenresF = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    width: 100%;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin: 20px 0px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr  ;
    }
`;

export const Title = styled.span`
    
    letter-spacing: 1px;
    text-align: center;
    width: 100%;
    margin: 20px 2px;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSizeTitle};
    font-weight: 600;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
`;

export const List = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-gap: 20px;
    
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr ;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        grid-template-columns: 1fr 1fr 1fr 1fr ;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr 1fr ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
`;