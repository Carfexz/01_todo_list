import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './components/pages/About'
import Error from './components/pages/Error'
import Posts from './components/pages/Posts/Posts'
import Layout from './components/helpers/Layout'
import { pathRoutes } from './const/routes/routes';
import './styles/fonts.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathRoutes.layout} element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path={pathRoutes.posts} element={<Posts />} />
          <Route path={pathRoutes.about} element={<About />} />
          <Route path={pathRoutes.error} element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
