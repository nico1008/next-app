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
    @media (min-width: 1200px) {
        width: 1400px;
    }
    @media (max-width: 1200px) and (min-width: 992px) {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px) {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px) {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px) {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;


export const TopRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 50px 0;

    @media (max-width: 768px) and (min-width: 576px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const ContentTitle = styled.span`
    letter-spacing: 1px;
    font-weight: 500;
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
    & a {
        
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
    border-radius: 5px;
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
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
    height: 49px;
    align-items: center;
    justify-content: center;
    color:white;
    border: 0px;
    border-radius: 5px;
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
    font-weight: 600;
    text-transform: uppercase;
    font-size: ${props => props.theme.textSizeTextL};
    color: ${props => props.theme.textColor};
    justify-self: end; 
    &:hover {
        transition: 0.3s;
        color: ${props => props.theme.accentColor1};
    }
`;

export const DescriptionFull = styled.div`
    display: flex;
    width: 100%;
    height: 471px;
    overflow: auto;
    font-size: ${props=> props.theme.textSizeTextL};
    letter-spacing: 1px;
    text-align: justify;
    @media (max-width: 576px)  {
        height: 100%;
    }
`;

export const Genres = styled.div`
    display: grid;
    font-size: ${props=> props.theme.textSizeTextM};
    grid-template-columns: repeat(5,1fr);
    grid-gap: 10px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr ;
    }
`;

export const Statistic = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    justify-items: center; 

    @media (max-width: 768px) and (min-width: 576px) {
        grid-template-columns: repeat(4, 1fr); 
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
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
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
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


export const CommentSection = styled.div`
  margin:15px;
  margin-bottom: 24px;
  
  
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 20px;
  
`;

export const UserNameInput = styled.input`
  display: flex;
  flex-direction: column;
  margin: 10px;    
  font-size: ${props=> props.theme.textSizeTextL700};
`;

export const CommentTextarea = styled.textarea`
  margin-bottom: 8px;
  border-radius: 4px;
  resize: none;
`;

export const CommentSubmitButton = styled.button`
  background-color: #ffa31a;
  width: auto;
  color: #000;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: Roboto;
  font-size: ${(props) => props.theme.textSizeTextM};
  margin: 0 auto; 
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff8d1a;
    scale:1.05;
  }
`;

export const CommentText = styled.ul`
  font-weight: 500;
  list-style: none;
  padding: 0;  
  font-size: ${props=> props.theme.textSizeTextL700};
`;

export const CommentItem = styled.div`
  background-color: ${props=> props.theme.CardColor};
  padding: 8px 20px 8px 20px;
  margin-bottom: 8px;
  border-radius: 4px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  
`;
export const TextArea = styled.textarea`
  width: 99.5%;
  border: 1px solid #ccc;
  margin-bottom: 8px;
`;


