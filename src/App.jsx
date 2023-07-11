import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './components/pages/About'
import Error from './components/pages/Error'
import Posts from './components/pages/Posts/Posts'
import Layout from './components/helpers/Layout'
import './styles/fonts.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
