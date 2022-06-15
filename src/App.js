// React
import { useState } from 'react'
// Lib
import fetchData from './lib/fetchData'
// Chakra
import { Box } from '@chakra-ui/react'
// Components
import Main from './components/layout/Main'
import Hero from './components/layout/Hero'
import Form from './components/search/Form'
import DataDisplay from './components/data/DataDisplay'

function App() {
  const [search, setSearch] = useState('')
  const [dataSet, setDataSet] = useState({})
  const [error, setError] = useState(undefined)

  const handleSubmit = async e => {
    e.preventDefault()
    if (search.length < 0) return
    const { data } = await fetchData(search)
    setDataSet(data)
  }

  return (
    <Main>
      <Box as="section" py={8}>
        <Hero />
      </Box>
      <Box as="section" py={8}>
        <Form
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
        />
      </Box>
      <Box as="section" py={8}>
        {!error && <DataDisplay imageLink={dataSet.image_link} />}
      </Box>
    </Main>
  )
}

export default App
