import './App.css';
import PopularPosts from '../api/PopularPosts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import Routes from './routes';
import Header from '../components/Header/Header';
import Post from '../components/Posts/Post';



function App() {
  return (
    <Router>
      <Header/>
      <Post/>
      <nav>
        <ul>
          <li>
            <NavLink to={Routes.bestPostsRoute}>
            <PopularPosts/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default App;
