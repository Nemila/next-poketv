"use client";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    router.push(`/search?animeTitle=${e.target["animeTitle"].value}`);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} action="/search">
      <input type="text" placeholder="Enter anime name..." name="animeTitle" />
      <button>Search</button>
    </form>
  );
};

export default Search;
