import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { VscDesktopDownload } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import { useFilmList } from "@/lib/hooks/useFilmList";
import Film from "@/components/templates/Films/Film/Film";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { CommentProps } from "./CommentItem/CommentItem";
import CommentItem from "./CommentItem/CommentItem";


const Details = () => {

  var pageKey = "";

if (typeof window !== 'undefined' && window.localStorage) {
  pageKey = window.location.href;
}

const [comments, setComments] = useState<CommentProps[]>(() => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const pageKey = window.location.href;
    const localData = localStorage.getItem(pageKey);
    return localData ? JSON.parse(localData) : [];
  }
  return [];
});

const [userName, setUserName] = useState('');
const [commentText, setCommentText] = useState('');

useEffect(() => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const pageKey = window.location.href;
    localStorage.setItem(pageKey, JSON.stringify(comments));
  }
}, [comments]);

///////////////////////////////////////
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve((router.query.id as string) || "" );
  
  const [page, setPage] = useState();
  const pageSize = 45;
  const { filmList } = useFilmList(String(page), String(pageSize));
  
  const currentMovieGenres = filmRetrieve?.data.movie.genres || [];
  
  const relatedMoviesByGenre = filmList?.data.movies.filter((film) => {    
    const movieGenres = film.genres || [];    
    const isSameMovie = film.id === filmRetrieve?.data.movie.id;

    return !isSameMovie && movieGenres.some((genre) =>
      currentMovieGenres.map((g) => g.toLowerCase()).includes(genre.toLowerCase())
    );
  });
  
  const relatedFilmsList = relatedMoviesByGenre?.slice(0, 5).map((film) => (
    <Film key={film.id} {...film}></Film>
  ));
  
  const noRelatedMoviesMessage = relatedFilmsList && relatedFilmsList.length === 0 ? (
    <Style.SorryText>
      Sorry, no similar movies found.
    </Style.SorryText>
  ) : null;
  ///////////////////////////////////////

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
  ///////////////////////////////////////

  
  if (isLoading) {
    return <Loader />;
  }
  
  function commentsList(){
    function addComment(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      if (userName.trim() !== '' && commentText.trim() !== '') {
        const currentDate = new Date().toLocaleDateString();
        const newComment: CommentProps = {
          id: comments.length + 1,
          userName: userName,
          commentText: commentText,
          time:currentDate,
        };
        setComments([...comments, newComment]);
        setUserName('');
        setCommentText('');
      } else {
        alert('Please enter both your user name and comment before submitting.');
      }
    }

    function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setUserName(event.target.value);
    }

    function handleCommentTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setCommentText(event.target.value);
    }

    const commentItems = comments.map((comment) => (
      <CommentItem
        key = {comment.id}
        id = {comment.id}
        userName = {comment.userName}
        commentText = {comment.commentText}
        time= {comment.time}
        comments={comments}
        setComments={setComments}
      />
      
    ));
    return (
      <Style.CommentSection>
        <Style.CommentForm onSubmit={addComment}>
            <Style.UserInfo>
              <Style.CommentText> USERNAME:</Style.CommentText>
              <Style.UserNameInput
                value={userName}
                onChange={handleUserNameChange}
              />
            </Style.UserInfo>

            <Style.TextArea
              value={commentText}
              onChange={(e) => handleCommentTextChange(e)}
            />
          
          <Style.CommentSubmitButton>SUBMIT COMMENT</Style.CommentSubmitButton>
        </Style.CommentForm >
    
        {commentItems}
      </Style.CommentSection>
    );
  }
   
  return (
    <Style.Details>
      
      <Style.BackgroundImage src={filmRetrieve?.data.movie.background_image_original}>
      </Style.BackgroundImage>

      <Style.Content>
        <Style.TopRow>

          <Style.ContentTitle>
            <Link href={"/"}>Movies / {filmRetrieve?.data.movie.title}</Link>
          </Style.ContentTitle>

          <Style.Year>
            <Link href={"/"}>{filmRetrieve?.data.movie.year + " " + filmRetrieve?.data.movie.language}</Link>
            </Style.Year>

        </Style.TopRow>


        <Style.Data>        

          <Style.Description>

            <Style.Genres>{genresList}</Style.Genres>

            <Style.DescriptionTitle>Movie Descrption</Style.DescriptionTitle>
            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full || 'No description available, sorry :('}
            </Style.DescriptionFull>

            <Style.Statistic>
              <StatisticItem
                icon={<FaStar />}
                text={filmRetrieve?.data.movie.rating}
              ></StatisticItem>
              <StatisticItem
                icon={<FaRegThumbsUp />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<FaRegClock />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              <StatisticItem
                icon={<FaCloudDownloadAlt  />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<VscDesktopDownload />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              
            </Style.Statistic>

            <Style.TorrentsTitle>Download Torrent</Style.TorrentsTitle>

            <Style.Torrents>{torrentsList}</Style.Torrents>
          </Style.Description>

          <Style.Image>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>
            <Style.Buttons>
              <Style.DownloadButton href={filmRetrieve?.data.movie.url}>
                Download
              </Style.DownloadButton>
              <Style.WatchButton href={filmRetrieve?.data.movie.url}>
                Watch
              </Style.WatchButton>
            </Style.Buttons>
          </Style.Image>

        </Style.Data>

        <Style.UserCommentsText>User Comments</Style.UserCommentsText>

        <Style.CommentItem>{commentsList()}</Style.CommentItem>     

        <Style.OtherMoviesText>You might also like</Style.OtherMoviesText>
        
        <Style.RelatedMovies>{relatedFilmsList}{noRelatedMoviesMessage}</Style.RelatedMovies>
      
           
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
