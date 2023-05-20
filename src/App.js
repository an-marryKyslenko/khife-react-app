import {RouterProvider ,Route,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'

import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import News from './pages/News'; 
import CataloguePage,{ loader as catalogueLoader } from './pages/cataloguePage/CataloguePage';


import './App.css';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='news' element={<News/>}/>
          <Route path='paining' element={<News/>}/>
          <Route path='contakts' element={<News/>}/>
          <Route 
            loader={catalogueLoader}
            path=':category' 
            element={<CataloguePage/>}/>
    </Route>
  ))
   return <RouterProvider router={router}/>
}

export default App;
