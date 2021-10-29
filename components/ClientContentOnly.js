import React from "react";
import { Box } from "@chakra-ui/react";

export const ClientContentOnly = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, [setHasMounted]);

  if (!hasMounted) {
    return null;
  }

  return <Box {...delegated}>{children}</Box>;
};
