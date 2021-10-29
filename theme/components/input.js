import { colors } from "../foundations/colors";

export const inputStyles = {
  baseStyle: {
    margin: 0,
    padding: 0
  },
  variants: {
    outline: props => {
      const { isRequired, isDisabled } = props;
      return {
        field: {
          // ...(isDisabled && { bgColor: colors.pokemon.grey[300] }),
          borderColor: isRequired
            ? colors.pokemon.red[300]
            : colors.pokemon.grey[500],
          _focus: {
            boxShadow: `0 0 0 0 ${colors.pokemon.blue[500]}`,
            borderColor: colors.pokemon.blue[500]
          },
          _disabled: {
            opacity: 1
          }
        }
      };
    }
  }
};
