import './styles/fonts.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './pages/About'
import Error from './pages/Error'
import Login from './pages/Login'
import PostPage from './pages/PostPage'
import Posts from './pages/Posts'
import Layout from './components/Layout'

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
