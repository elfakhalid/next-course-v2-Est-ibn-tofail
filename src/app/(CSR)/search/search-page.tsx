"use client";

import { UnsplashSearchResponse } from "@/interfaces/unsplash-search-response";
import { Button, Form, Input, Row } from "antd";
import Image from "next/image";
import { useState } from "react";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onFinished = async (values: any) => {
    const { search } = values;
    setError(false);
    setLoading(false);
    try {
      const results = await fetch(`/api/search?search=${search}`);
      const images: any = await results.json();
      setSearchResults(images);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Row justify="center">
        <Form onFinish={onFinished}>
          <Form.Item
            name="search"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input type="text" placeholder="Search" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form>
      </Row>
      <Row justify="center">
        {searchResults?.map((result: any) => (
          <Image
            key={result.id}
            src={result.urls.small}
            alt={result.alt_description}
            width={200}
            height={200}
            objectFit="contain"
            style={{ margin: "1rem" }}
          />
        ))}
      </Row>
    </>
  );
}
