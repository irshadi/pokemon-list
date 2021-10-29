import React from "react";
import Input from "../Input";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  IconButton
} from "@chakra-ui/react";
import { IoMdCloseCircle, IoIosSearch } from "react-icons/io";
import { useSearchInput } from "../../../hooks/useSearchInput";

const SearchInput = ({
  isSearching,
  onClear,
  onSearch = () => {},

  hasOnClear = true,
  ...props
}) => {
  const { displayValue, setDisplayValue, searchValue, handleClearSearch } =
    useSearchInput({ delay: 500 });

  const _hasOnClear = hasOnClear && Boolean(displayValue.length);

  // Trigger search on higher level
  React.useEffect(() => {
    onSearch(searchValue);
  }, [searchValue]);

  return (
    <InputGroup my="1em">
      <InputLeftElement pointerEvents="none">
        <Icon as={IoIosSearch} color="pokemon.grey.700" />
      </InputLeftElement>
      <Input
        pl="2.5em"
        borderRadius="full"
        {...props}
        value={displayValue}
        onChange={e => setDisplayValue(e.target.value)}
      />
      {_hasOnClear && (
        <InputRightElement>
          <IconButton
            onClick={handleClearSearch}
            icon={<IoMdCloseCircle />}
            color="pokemon.grey.700"
            size="sm"
            variant="icon-button"
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default SearchInput;
