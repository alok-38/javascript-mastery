"use client";
import React from "react";
import PodcastCard from "@/components/PodcastCard";
import { useQuery } from "convex/react"; // Adjust import based on library documentation
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";

interface Podcast {
  _id: string;
  podcastTitle: string;
  podcastDescription: string;
  imageUrl: string;
}

const Home = () => {
  const queryResult = useQuery<typeof api.podcasts.getTrendingPodcasts>(
    api.podcasts.getTrendingPodcasts
  );

  if (queryResult.isLoading) return <LoaderSpinner />;
  if (queryResult.isError) return <div>Error fetching data</div>;

  // Assuming queryResult.data is an array of Podcast objects
  const trendingPodcasts: Podcast[] = queryResult.data as Podcast[];

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {trendingPodcasts.map(
            ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
              <PodcastCard
                key={_id}
                imgUrl={imageUrl}
                title={podcastTitle}
                description={podcastDescription}
                podcastId={_id}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
