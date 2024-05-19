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
