import { UnsplashSearchResponse } from "@/interfaces/unsplash-search-response";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  if (!search) {
    return NextResponse.json(
      { error: "Search query is required" },
      { status: 400 }
    );
  }

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${search}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const { results }: UnsplashSearchResponse = await response.json();
  return NextResponse.json(results);
}
