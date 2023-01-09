import Link from "next/link";

const getAnimeDetails = async (animeId) => {
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/info/${animeId}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const data = await res.json();
  return data;
};

const AnimePage = async ({ params }) => {
  const anime = await getAnimeDetails(params.animeId);

  return (
    <section>
      <h1>Anime/{anime?.id}</h1>
      <h3>{anime?.title.english}</h3>
      <p>{anime?.description}</p>
      <p>Release date {anime?.releaseDate}</p>
      <p>Total episodes {anime?.totalEpisodes}</p>

      <div>
        {anime?.episodes.map((episode) => (
          <Link
            href={`/watch/${anime.id}/${episode.id}`}
            key={episode.id}
            style={{ display: "block" }}
          >
            Episode {episode.number}: {episode.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AnimePage;
