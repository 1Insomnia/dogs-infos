// React
import { useState } from 'react'
// Components
import Main from './components/layout/Main'
import Hero from './components/layout/Hero'
import Form from './components/search/Form'

function App() {
  const [search, setSearch] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(search)
  }

  return (
    <Main>
      <Hero />
      <Form handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
    </Main>
  )
}

export default App
