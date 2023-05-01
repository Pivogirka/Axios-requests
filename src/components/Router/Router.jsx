import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Counter } from '../Main/Counter'
import { Home } from '../Main/Home'
import { SWpeople } from '../Main/StarWars/SWpeople'
import { SWplanets } from '../Main/StarWars/SWplanets'
import { SWstarships } from '../Main/StarWars/SWstarships'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='counter' element={ <Counter/> } />
          <Route path='SWpeople' element={<SWpeople />} />
          <Route path='SWplanets' element={<SWplanets/>}/>
          <Route path='SWstarships' element={<SWstarships/>}/>
          <Route
            path="*"
            element={
              <h1>There is no page. Go to <Link to="/">Home</Link></h1>
            } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router };