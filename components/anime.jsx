import Image from "next/image";
import Link from "next/link";
import React from "react";

const Anime = ({ anime }) => {
  return (
    <Link href={`/watch/${anime.id}`}>
      <Image src={anime.image} width={150} height={200} alt="" />
      <p>{anime.title.english ? anime.title.english : anime.title.native}</p>
    </Link>
  );
};

export default Anime;
