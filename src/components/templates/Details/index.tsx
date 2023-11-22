import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import { useFilmList } from "@/lib/hooks/useFilmList";
import { useEffect, useState } from "react";
import Film from "@/components/templates/Films/Film/Film";

import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";

const Details = () => {
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve((router.query.id as string) || "" );
  
  const [page, setPage] = useState(2);
  const pageSize = 9;
  const { filmList} = useFilmList(String(page), String(pageSize));

  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

const currentMovieGenres = filmRetrieve?.data.movie.genres || [];

  const relatedMoviesByGenre = filmList?.data.movies.filter((film) => {
    
    const movieGenres = film.genres || [];
    
    const isSameMovie = film.id === filmRetrieve?.data.movie.id;

    return !isSameMovie && movieGenres.some((genre) =>
      currentMovieGenres.map((g) => g.toLowerCase()).includes(genre.toLowerCase())
    );
  });

  const relatedFilmsList = relatedMoviesByGenre?.map((film) => (
    <Film key={film.id} {...film}></Film>
  ));
  
  const noRelatedMoviesMessage = relatedFilmsList && relatedFilmsList.length === 0 ? (
    <Style.SorryText>
      Sorry, no similar movies found.
    </Style.SorryText>
  ) : null;
  
  
  <Style.RelatedMovies>
    {relatedFilmsList}
  </Style.RelatedMovies>
  
  

  if (isLoading) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => (
    <GenreItem key={value} text={value} />
  ));
  
  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });

   
  return (
    <Style.Details>
      
      <Style.BackgroundImage src={filmRetrieve?.data.movie.background_image_original}>
      </Style.BackgroundImage>

      <Style.Content>
        <Style.ContentTitle>
          <Link href={"/"}>Movies / {filmRetrieve?.data.movie.title}</Link>
        </Style.ContentTitle>

        <Style.Data>
          
          <Style.Image>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>
            <Style.Buttons>
              <Style.DownloadButton href={filmRetrieve?.data.movie.url}>
                Download
              </Style.DownloadButton>
              <Style.WatchButton href={filmRetrieve?.data.movie.url}>
                Watch Now
              </Style.WatchButton>
            </Style.Buttons>
          </Style.Image>

          <Style.Description>
            
            <Style.Year>
              {filmRetrieve?.data.movie.year +
                " " +
                filmRetrieve?.data.movie.language}
            </Style.Year>

            <Style.Genres>{genresList}</Style.Genres>

            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full || 'No description available'}
            </Style.DescriptionFull>

            <Style.Statistic>
              <StatisticItem
                icon={<VscStarFull />}
                text={filmRetrieve?.data.movie.rating}
              ></StatisticItem>
              <StatisticItem
                icon={<AiTwotoneLike />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<BiTimeFive />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              <StatisticItem
                icon={<VscDesktopDownload />}
                text={filmRetrieve?.data.movie.download_count}
              ></StatisticItem>
            </Style.Statistic>

            <Style.TorrentsTitle>Downloads:</Style.TorrentsTitle>

            <Style.Torrents>{torrentsList}</Style.Torrents>
          </Style.Description>
        </Style.Data>

        <Style.OtherMoviesText>
          You might also like:
        </Style.OtherMoviesText>
        <Style.RelatedMovies>{relatedFilmsList}{noRelatedMoviesMessage}</Style.RelatedMovies>
      
           
      </Style.Content>
    </Style.Details>
  );
};

export default Details;

