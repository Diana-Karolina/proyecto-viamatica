import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SeguroList from './components/SeguroList'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<SeguroList></SeguroList>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
