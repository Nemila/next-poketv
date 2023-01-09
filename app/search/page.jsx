"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import Anime from "../../components/anime";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("animeTitle");

  const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  };
  const { data, error, isLoading } = useSWR(
    `https://api.consumet.org/meta/anilist/${query}`,
    fetcher
  );
  return (
    <div>
      <h1>Search Page</h1>
      <p>You are looking for {searchParams.get("animeTitle")}</p>
      {data?.map((anime) => (
        <Anime key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default SearchPage;
