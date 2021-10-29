import React from "react";
import { useRouter } from "next/router";

export const Page = ({ page: Page, needQuery = false }) => {
  const { query } = useRouter();

  if (!needQuery) {
    return <Page />;
  }

  return <Page {...query} />;
};
