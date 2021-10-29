import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./style";
import { textStyles } from "./components/text";
import { inputStyles } from "./components/input";
import { buttonStyles } from "./components/buttons";

const theme = extendTheme({
  ...globalStyles,
  components: {
    Heading: {},
    Text: textStyles,
    Button: buttonStyles,
    Input: inputStyles
  }
});

export default theme;
