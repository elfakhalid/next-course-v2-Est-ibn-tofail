import { getImagesByTopic } from "@/services/axios";
import Image from "next/image";

interface PageProps {
  params: { topic: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// export const dynamicParams = false;

export function generateStaticParams() {
  return [{ topic: "health" }, { topic: "nature" }, { topic: "people" }];
}

export default async function Page({ params: { topic } }: PageProps) {
  const images = await getImagesByTopic(topic);
  console.log(images);
  return (
    <div style={{ margin: "auto", marginTop: "40px" }}>
      <h1>{topic}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map(image => (
          <div key={image.id} style={{ margin: "10px" }}>
            <Image
              src={image.urls.small}
              alt={image.alt_description}
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                maxWidth: "400px",
                maxHeight: "400px",
              }}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
