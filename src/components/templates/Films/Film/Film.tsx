import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { FaStar  } from "react-icons/fa";
import * as Style from "./index.styled";
import { FaFilm } from "react-icons/fa";


const Film: React.FC<MovieList> = (props) => {
  return (
    
    <Style.Film>
      <Link href={`/films/${props.id}`}>
          
        <Style.Content>
          <Style.TextContainer>

            <Style.Text1>
              {props.year} 
            </Style.Text1>

            <Style.IconContrainer>
              <FaFilm />
            </Style.IconContrainer>            
            
            <Style.Text2>
              {props.language} 
            </Style.Text2>

          </Style.TextContainer>
          
          <Style.Cards>            
            <Style.Card1            
              src={
                props.medium_cover_image
                  ? props.medium_cover_image
                  : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
              }
              alt={props.medium_cover_image}
            ></Style.Card1>

            <Style.Card2>
             
              {props.genres ? (
                <Style.Genres>
                  {0 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[0].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {1 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[1].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {2 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[2].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                </Style.Genres>
              ) : (
                ""
              )}

              <Style.Rating>
                <Style.RatingIcon>
                  <FaStar />
                </Style.RatingIcon>
                <Style.RatingText> {props.rating} / 10</Style.RatingText>
              </Style.Rating>

              <Style.Details>DETAILS</Style.Details>
            </Style.Card2>
          </Style.Cards>

          <Style.Name>{props.title}</Style.Name>

          
        </Style.Content>
      </Link>
    </Style.Film>
  );
};

export default Film;
