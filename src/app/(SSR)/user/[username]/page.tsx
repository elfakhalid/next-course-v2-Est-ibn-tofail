import { User } from "@/interfaces/unsplash-user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface PageProps {
  params: { username: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params: { username },
}: PageProps): Promise<Metadata> {
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  if (response.status === 404) notFound();
  const user: User = await response.json();
  return {
    title: `Unsplash User: ${user.first_name} ${user.last_name}`,
  };
}

// const getUserCashed=cache(getUser) this will cache the get function if you're not using the fetch function and it will prevent the function from being called multiple times

export default async function Page({ params: { username } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  if (response.status === 404) notFound();
  const user: User = await response.json();

  return (
    <div>
      <h1>{user.username}</h1>
      <p>First Name:{user.first_name}</p>
      <p>Last Name:{user.last_name}</p>
      <a target="blank" href={`https://unsplash.com/${user.username}`}>
        Unsplash profile
      </a>
    </div>
  );
}
