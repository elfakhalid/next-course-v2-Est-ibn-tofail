import { UnsplashImage } from "./unsplash-image";

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}
