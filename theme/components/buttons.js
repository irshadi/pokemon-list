import { colors } from "../foundations/colors";

export const buttonStyles = {
  baseStyle: props => {
    const { isDisabled } = props;

    return {
      color: "white",
      border: "none",
      borderRadius: "full",
      cursor: "pointer",
      ...(isDisabled && {
        _disabled: {
          bgColor: colors.pokemon.grey[200]
        }
      })
    };
  },
  variants: {
    solid: ({ colorScheme, isDisabled }) => ({
      bgColor: colors.pokemon[colorScheme][500],
      _hover: {
        bgColor: colors.pokemon[colorScheme][200],
        ...(isDisabled && { _disabled: { bgColor: colors.pokemon.grey[200] } })
      }
    }),
    outline: ({ colorScheme, isDisabled }) => ({
      bgColor: "white",
      border: "solid 1px",
      color: colors.pokemon[colorScheme][500],
      borderColor: colors.pokemon[colorScheme][200],
      _hover: {
        bgColor: colors.pokemon[colorScheme][100],
        color: colors.pokemon[colorScheme][500],
        ...(isDisabled && { _disabled: { bgColor: colors.pokemon.grey[300] } })
      }
    }),
    transparent: ({ colorScheme, isDisabled }) => ({
      bgColor: "transparent",
      color: colors.pokemon[colorScheme][700],
      _hover: {
        bgColor: colors.pokemon[colorScheme][100],
        color: colors.pokemon[colorScheme][500],
        ...(isDisabled && { _disabled: { bgColor: colors.pokemon.grey[300] } })
      }
    }),
    link: ({ isDisabled }) => ({
      bgColor: "transparent",
      color: colors.pokemon.blue[700],
      _hover: {
        color: colors.pokemon.blue[500],
        ...(isDisabled && { _disabled: { bgColor: colors.pokemon.grey[300] } })
      }
    }),
    "icon-button": {
      bg: "transparent",
      color: colors.pokemon.grey[500],
      border: "none",
      borderRadius: "0",
      rounded: "full",
      cursor: "pointer",
      _hover: {
        color: colors.pokemon.red[500]
      }
    }
  },
  defaultProps: {
    variant: "solid",
    colorScheme: "blue"
  }
};
