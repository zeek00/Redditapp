import './App.css';
import PopularPosts from '../api/popularPosts/PopularPosts';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PostsRoutes from './routes';
import HomePage from '../components/Home/HomePage';
import BestPosts from '../api/bestPosts/BestPosts';
import SearchPosts from '../api/search/SearchPosts';
import PostById from '../api/postById/PostById';
import HeaderWithConditionalRender from '../helpers/HeaderWithConditionalRender';


function App() {

  return (
    <Router>
        
      <HeaderWithConditionalRender />
      
      <Routes>
        <Route exact path={`/${PostsRoutes.homePageRoute()}`}
        element={<HomePage/>}/>
        <Route path={`/${PostsRoutes.popularPostsRoute()}`}
        element={<PopularPosts/>}/>
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
