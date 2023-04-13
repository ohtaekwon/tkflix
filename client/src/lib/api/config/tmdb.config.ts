const mediaType = {
  movie: "movie",
  tv: "tv",
} as const;

const mediaCategory = {
  popular: "popular",
  top_rated: "top_rated",
} as const;

const backdropPath = (imgEndpoint: string) =>
  `https://image.tmdb.org/t/p/original${imgEndpoint}`;

const posterPath = (imgEndpoint: string) =>
  `https://image.tmdb.org/t/p/w500${imgEndpoint}`;

const youtubePath = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}?controls=0`;

export default {
  mediaType,
  mediaCategory,
  backdropPath,
  posterPath,
  youtubePath,
};