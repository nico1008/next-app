import { useFilmList } from "@/lib/hooks/useFilmList";
import { useState } from "react";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import * as Style from "./index.styled";

const Films = () => {
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));

  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  if (isLoading) {
    return;
  }
  return filmList ? (
    <Style.Films>
      <Style.Content>

          {/* <Style.GenresF>

          <Style.Title>Action</Style.Title>
          <Style.Title>Drama</Style.Title>
          <Style.Title>Horror</Style.Title>
          <Style.Title>Romance</Style.Title>
          <Style.Title>Family</Style.Title>
          <Style.Title>Comedy</Style.Title>
          
          </Style.GenresF> */}

        <Style.List>{filmsList}</Style.List>

        <Pagination
          totalUsersCount={filmList?.data?.movie_count}
          currentPage={page}
          pageSize={pageSize}
          onPageChange={(page) => setPage(page)}
        />
        
      </Style.Content>
    </Style.Films>
  ) : null;
};

export default Films;
