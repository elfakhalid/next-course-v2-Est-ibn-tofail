"use client";

import { Button } from "antd";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>{error.message}</h1>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
