import styled from "styled-components"
export const Card2 = styled.div`
    position: absolute;
    aspect-ratio: 1/1/5;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    background-color: rgba(3, 4, 94, 0.9);

    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    padding: 20px;
    color: white; 
`;

export const Rating = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 30%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const RatingIcon = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 10px;
    color:  yellow;
    font-size: 3em; 
`;
export const RatingText = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 20px;
`;

export const Genres = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GenresText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #caf0f8;
    font-size: ${props=> props.theme.textSizeTextL};
`;

export const Details = styled.button`
    justify-content: center;
    align-items: center;    
    cursor: pointer;
    border: 0;
    width: 100%;
    margin: 10px 0px;
    height: 40px;
    flex: 0 0 auto;
    border-radius: 10px;
    background-color:  ${props => props.theme.accentColor1};
    color: white;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 600;
    &:hover{
        background-color: #ff0a54;
    }
`;

export const Film = styled.div`
    cursor: pointer;
    display: flex;  
    flex-direction:column ;
    background-color: ${props => props.theme.iconColor};
    width: 100%;
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    border-radius:10px;
    overflow: hidden;
    transition: all 0.3s ease;
    
    
    &:hover{
        box-shadow: 0px 0px 20px 1px ${props => props.theme.accentColor4};
        scale: 105%;
        transition: all 0.3s ease;
        & ${Card2}{
            transition: 0.3s;
            opacity: 1;
            pointer-events: all;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`;

export const Cards = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    
`;

export const Card1 = styled.img` 
    aspect-ratio: 1/1/5;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    
`;

export const Name = styled.div`
    text-align: center;
    width: 100%;
    align-items: center; 
    font-weight: 600;
    font-size: ${props => props.theme.textSizeTextL};
    letter-spacing: 1px;
    overflow: hidden;
    margin: 10px 0px 10px 0px;
    padding: 0px 10px;
    box-sizing: border-box;
    text-overflow: ellipsis;   
    white-space: nowrap;
    
    @media (max-width: 992px) and (min-width: 768px)  {
        font-size: ${props => props.theme.textSizeTextM900};
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const Text1 = styled.div`
    text-align: center;
    align-items: center;
    margin: 0;
    padding: 7px 0px;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    width: 33%; 
    font-weight: 600;
    font-size: ${props => props.theme.textSizeTextL700}; 
    background-color: #ffa31a;
    justify-content: flex-end;    
    text-transform: uppercase;
    box-sizing: border-box; 
    color: #000000;
    `;
export const Text2 = styled.div`
    text-align: center;
    margin: 0;
    padding: 7px 0px;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    width: 33%; 
    font-weight: 600;
    font-size: ${props => props.theme.textSizeTextL700}; 
    background-color: #ffa31a;
    justify-content: flex-end;    
    text-transform: uppercase;
    box-sizing: border-box;
    color: #000000;
    `;  

 export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;  
    background-color: ${props => props.theme.iconColor};
    
`;
export const IconContrainer = styled.div`
    display: flex;
    justify-content: space-between;  
    padding: 7px 0px;
    font-size: 22px; 
    border-radius: 10px;
    
`;
