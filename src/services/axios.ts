import { UnsplashImage } from "@/interfaces/unsplash-image";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.unsplash.com/",
});

export const getRandomImage = async (): Promise<UnsplashImage> => {
  const response = await axios.get(`/photos/random`, {
    params: {
      client_id: process.env.UNSPLASH_ACCESS_KEY,
    },
  });
  return response.data;
};

export const getImagesByTopic = async (
  topic: string
): Promise<UnsplashImage[]> => {
  const response = await axios.get(`/photos/random`, {
    params: {
      query: topic,
      client_id: process.env.UNSPLASH_ACCESS_KEY,
      count: 10,
    },
  });
  return response.data;
};
