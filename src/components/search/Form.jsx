// Chakra
import {
  InputGroup,
  InputRightElement,
  Input,
  FormControl,
  FormLabel,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'

const Form = ({ handleSubmit, search, setSearch }) => {
  const borderColor = useColorModeValue('primary.light', 'primary.dark')

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="search" fontSize="sm">
          Search by breed
        </FormLabel>
        <InputGroup size="md">
          <Input
            py={4}
            type="text"
            placeholder="Border Collie"
            border="1px"
            borderColor={borderColor}
            focusBorderColor={borderColor}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <InputRightElement>
            <IconButton type="submit" icon={<SearchIcon />} size="sm">
              Search
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </form>
  )
}

export default Form
