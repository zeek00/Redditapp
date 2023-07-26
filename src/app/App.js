import './App.css';
import PopularPosts from '../api/popularPosts/PopularPosts';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PostsRoutes from './routes';
import Header from '../components/Header/Header';
import HomePage from '../api/homePage/HomePage';
import BestPosts from '../api/bestPosts/BestPosts';
import SearchPosts from '../api/search/SearchPosts';
import PostById from '../api/postById/PostById';

function App() {
  return (
    <Router> 
      <Header/> 
      <Routes>
    
      <Route path={`/${PostsRoutes.popularPostsRoute()}`}
      element={<PopularPosts/>}/>
      <Route path={`/${PostsRoutes.homePageRoute()}`}
      element={<HomePage/>}/>
       <Route path={`/${PostsRoutes.bestPostsRoute()}`}
      element={<BestPosts/>}/>
      <Route path={`/${PostsRoutes.search()}`}
      element={<SearchPosts/>}/>
      <Route path={`/${PostsRoutes.post()}`}
      element={<PostById/>}/>

      </Routes> 
    </Router>

  );
}

export default App;
