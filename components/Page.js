import React from "react";
import { useRouter } from "next/router";
import { ContentView } from "./ContentView";

const PageQuery = ({ page: Page, needQuery = false }) => {
  const { query } = useRouter();

  if (!needQuery) {
    return <Page />;
  }

  return <Page {...query} />;
};

export const PageWrapper = props => {
  return (
    <ContentView>
      <PageQuery {...props} />
    </ContentView>
  );
};
