import { getRandomImage } from "../../../services/axios";
import { UnsplashImage } from "../../../interfaces/unsplash-image";
import { Alert, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
export default async function Page() {
  const response: UnsplashImage = await getRandomImage();
  return (
    <div>
      <Row justify="center">
        <Alert type="info" message={response.alt_description} />
      </Row>
      <Row justify="center">
        <div>
          <Image
            src={response.urls.raw}
            width={response.width}
            height={response.height}
            alt={response.alt_description}
            style={{
              borderRadius: "10px",
              objectFit: "contain",
              margin: "auto",
              maxWidth: "800px",
              maxHeight: "800px",
            }}
          />
        </div>
      </Row>
      <Row justify="center">
        <Link href={`/user/${response.user.username}`}>
          {response.user.username}
        </Link>
      </Row>
    </div>
  );
}
