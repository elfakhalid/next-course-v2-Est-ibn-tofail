"use client";

import { UnsplashSearchResponse } from "@/interfaces/unsplash-search-response";
import { Button, Form, Input, Row } from "antd";
import { useState } from "react";

export default function SearchPage() {
  const [searchResults, setSearchResults] =
    useState<UnsplashSearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onFinished = async (values: any) => {
    const { search } = values;
    setError(false);
    setLoading(false);
    try {
      const results = await fetch(`/api/search?search=${search}`);
      const images: UnsplashSearchResponse = await results.json();
      setSearchResults(images);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
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
  );
}
