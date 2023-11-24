import styled from 'styled-components';

export const Details = styled.section`
    display: flex; 
    width: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.backgroundColor2};
    transition: 0.1s;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 0px 80px;
    margin: 0px 20px;
    box-sizing: border-box;
    z-index: 1;
    background-color: ${props => props.theme.backgroundColor2};
    @media (min-width: 1200px){
        width: 1400px;
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

export const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 50px 0px;
`;


export const ContentTitle = styled.span`
    letter-spacing: 1px;
    font-weight: 500;
    flex: 0 0 auto;
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
    & a {
        font-family: Roboto;
        font-size: ${props => props.theme.textSizeTitle};
        font-weight: 500;
        letter-spacing: 1px;
        transition: 0.3s;
        &:hover {
            transition: 0.3s;
            color: ${props => props.theme.accentColor1};
        }
    }
`;

export const Data = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1.5fr 1fr ;
    grid-gap: 20px;
    border-top: 2px solid ${props => props.theme.accentColor1};
    border-bottom: 2px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){   
    }
    @media (max-width: 1200px) and (min-width: 992px)  {     
    }
    @media (max-width: 992px) and (min-width: 768px)  {     
    }
    @media (max-width: 768px) and (min-width: 576px)  {    
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
`;

export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;
export const Img = styled.img`
    aspect-ratio: 1/1/5;
    display: flex;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    transition: 0.5s;
    box-shadow: 0px 3px 5px ${props=>props.theme.shadowColor};;
    margin: 0px 0px 20px 0px;
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
`;

export const Button = styled.a`
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    color:white;
    background-color: aqua;
    border: 0px;
    border-radius:10px;
    font-size: ${props=>props.theme.textSizeTextM};
    &:hover{
        opacity: 0.9;
    }
`;
export const DownloadButton = styled(Button)`
    background-color: ${props=>props.theme.accentColor1};
`;
export const WatchButton = styled(Button)`
    background-color:${props=>props.theme.accentColor2};
`;

export const Description = styled.div`
    display: grid;
    align-items: flex-start;
    align-self: flex-start;
    grid-template-columns: 1fr;
    grid-gap: 20px;
`;

export const Title = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 700;
    width: 100%;
    justify-content: space-between;
`;

export const Year = styled.div`
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props => props.theme.textSizeTextL};
    color: ${props => props.theme.textColor};
    text-transform: uppercase;
`;

export const DescriptionFull = styled.div`
    display: flex;
    width: 100%;
    font-size: ${props=> props.theme.textSizeTextL};
    letter-spacing: 1px;
    text-align: justify;
`;

export const Genres = styled.div`
    display: grid;
    font-size: ${props=> props.theme.textSizeTextM};
    grid-template-columns: repeat(5,1fr);
    grid-gap:10px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
`;

export const Statistic = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap:20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr  1fr 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr  ;
    }
`;

export const TorrentsTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
`;

export const DescriptionTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
`;

export const Torrents = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
`;

export const RelatedMovies = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
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
export const OtherMoviesText = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 700;
    width: 100%;
    justify-content: center;
    margin: 30px 0px 30px 0px;
    text-align: center;
`;

export const UserCommentsText = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 700;
    width: 100%;
    justify-content: start;
    margin: 30px 0px 30px 0px;
    text-align: start;
`;

export const SorryText = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 600;
    width: 100%;
    justify-content: center;
    margin: 20px 0px 00px 0px;
    text-align: center;
`;