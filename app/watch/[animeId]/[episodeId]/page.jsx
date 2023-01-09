import Link from "next/link";
import Player from "../../../../components/player";

const getEpisode = async (episodeId) => {
  try {
    const res = await fetch(
      `https://api.consumet.org/meta/anilist/watch/${episodeId}`,
      {
        next: {
          revalidate: 10,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getAnimeDetails = async (animeId) => {
  try {
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
  } catch (error) {
    console.log(error.message);
  }
};

const AnimePage = async ({ params }) => {
  const anime = await getAnimeDetails(params.animeId);
  const episode = await getEpisode(params.episodeId);
  const currentEpisode = anime.episodes.find(
    (episode) => episode.id === params.episodeId
  );

  return (
    <div>
      <section>
        <Player sources={episode.sources} />
      </section>
      <section>
        <h2>
          Epsiode {currentEpisode.number}: {currentEpisode.title}
        </h2>
        <p>{currentEpisode.description}</p>
      </section>
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
    </div>
  );
};

export default AnimePage;
