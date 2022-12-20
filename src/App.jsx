import { useState } from 'react'
import './App.css'
import Sprint from './components/Sprint'
import useFetch from './hooks/useFetch'
import SprintSelect from './components/SprintSelect'
import Logo from './components/Logo'
import Footer from './components/Footer'

function App() {

  const BASE_URL = "https://tappytaps2.atlassian.net/rest/agile/1.0";
  const [chosenSprintId, setchosenSprintId] = useState(null)
  const sprintList = useFetch(`${BASE_URL}/board/1/sprint`).data;

  if(!sprintList) return <h2 style={{textAlign: "center"}}>Načítám sprinty...</h2>
 
  return (
    <div className="App">
      <Logo />
      <SprintSelect data={sprintList} setSprint={(val) =>setchosenSprintId(val)} />
      {chosenSprintId &&<Sprint id={chosenSprintId} />}
      <Footer />
    </div>
  )
}

export default App
