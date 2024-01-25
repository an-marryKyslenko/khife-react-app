import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import News from './pages/News';
import CataloguePage, { loader as catalogueLoader } from './pages/cataloguePage/CataloguePage';


import './App.css';
import SingleProduct, { loader as singleProductLoader } from './pages/SingleProduct/SingleProduct';
import Contacts from './pages/Contacts/Contacts';
import ErrorPage from './pages/ErrorPage';
import FakePage from './pages/FakePage';
import Cabinet from './pages/Cabinet/Cabinet';
import PersonalInfo from './pages/Cabinet/PersonalInfo';
import FavoriteProducts from './pages/Cabinet/FavoriteProducts';
import DeleteAccoun from './pages/Cabinet/DeleteAccoun';
import History from './pages/Cabinet/History';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='pay_delivery' element={<News />} />
      <Route path='contakts' element={<Contacts />} />
      <Route path="product/:id" element={<SingleProduct />} loader={singleProductLoader} />
      <Route path='catalogue/:category' loader={catalogueLoader} element={<CataloguePage />} />
      <Route path='cabinet' element={<Cabinet />} >
        <Route index element={<PersonalInfo />} />
        <Route path='favorite' element={<FavoriteProducts />} />
        <Route path='history' element={<History />} />
        <Route path='delete-account' element={<DeleteAccoun />} />
      </Route>
      <Route path='fake' element={<FakePage />} />
      <Route path='*' element={<ErrorPage />} />
    </Route >
  ))
  return <RouterProvider router={router} />
}

export default App;
