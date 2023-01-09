import React from "react";
import Anime from "../components/anime";
import Search from "../components/search";

const getPopAnimes = async () => {
  const res = await fetch("https://api.consumet.org/meta/anilist/popular", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.results;
};

const getTrendingAnimes = async () => {
  try {
    const res = await fetch("https://api.consumet.org/meta/anilist/trending", {
      cache: "no-store",
    });
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};

const HomePage = async () => {
  const popAnimes = await getPopAnimes();
  const trendingAnimes = await getTrendingAnimes();
  return (
    <div>
      <h1>Home Page</h1>
      <Search />
      <section>
        <h2>Trending Animes</h2>
        <div>
          {trendingAnimes?.map((anime) => (
            <Anime key={anime.id} anime={anime} />
          ))}
        </div>
      </section>

      <section>
        <h2>Popular Animes</h2>
        <div>
          {popAnimes?.map((anime) => (
            <Anime key={anime.id} anime={anime} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
