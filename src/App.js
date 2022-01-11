import './App.css'
// import CollectionCard from './components/CollectionCard'
import Header from './components/header'
import SmartList from './components/smartList'
import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {
  const [smarttalent, setSmartTalent] = useState([])
  useEffect(() => {
    const getnfts = async () => {
      const url =
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x1947ae7e439a050C218Ebc8A2C9b19A53B44EC6C&order_direction=asc'
      const datafetched = await axios.get(url)
      setSmartTalent(datafetched.data.assets)
    }
    return getnfts()
  }, [])
  return (
    <div className='App'>
      <Header />
      <SmartList smarttalent={smarttalent} />
    </div>
  )
}

export default App
