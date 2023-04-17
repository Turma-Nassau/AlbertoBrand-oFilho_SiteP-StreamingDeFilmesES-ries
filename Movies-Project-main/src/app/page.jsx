"use client";

// import TesteCall from "../components/teste";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

import styles from "../styles/css/page.module.css";
import Image from "next/image";

// TODO: export to right component

export default function Home() {
  const [data, setData] = useState();
  const [movie, setMovie] = useState("Star Wars");
  const [page, setPage] = useState(1);
  const [year, setYear] = useState(null);
  const searchRef = useRef(null);
  const yearRef = useRef(null);

  const handleSearch = () => {
    setMovie(searchRef.current.value);
    setPage(1);
    setYear(yearRef.current.value);
    // console.log(year, "ANOOOOOOOOOOOOO");

    if (searchRef.current.value == 0) {
      setMovie("Star Wars");
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${movie}&page=${page}&y=${year}`
      )
      .then((res) => {
        setData(res.data);
      });
  }, [movie, page, year]);

  return (
    <>
      <label>Name</label>
      <input type="text" ref={searchRef} onChange={handleSearch} />
      <label>Year</label>
      <input
        type="number"
        id="year"
        name="year"
        ref={yearRef}
        onChange={handleSearch}
      />
      <ul>
        {data?.Search?.map((movie) => {
          const url = movie?.Poster;

          return url !== "N/A" ? (
            <li key={movie.imdbID}>
              {/*  TODO: movie.imdbID key logic */}
              {/* {console.log(typeof movie.imdbID, movie.Title)} */}
              {movie.imdbID}
              <div>{movie.Title}</div>
              <Image
                src={url}
                width={150}
                height={150}
                alt="Movie Poster"
                priority
              />
            </li>
          ) : (
            <></>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setPage((prevPage) => prevPage - 1);
        }}
        disabled={page === 1}
      >
        decrement {page}
      </button>
      <button
        onClick={() => {
          setPage((prevPage) => prevPage + 1);
        }}
      >
        increment {page}
      </button>
    </>
  );
}
