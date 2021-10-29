import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./style";
import { textStyles } from "./components/text";

const theme = extendTheme({
  ...globalStyles,
  components: {
    Heading: {},
    Text: textStyles,
    Button: {}
  }
});

export default theme;
