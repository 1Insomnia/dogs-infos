import { Box, Image } from '@chakra-ui/react'

const DataDisplay = ({ imageLink }) => {
  return (
    <Box>
      <Image src={imageLink} />
    </Box>
  )
}

export default DataDisplay
