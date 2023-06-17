import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './components/pages/About'
import Error from './components/pages/Error'
import Login from './components/pages/Login'
import PostPage from './components/pages/PostPage'
import Posts from './components/pages/Posts'
import Layout from './components/helpers/Layout'
import './styles/fonts.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/posts/:id' element={<PostPage />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
