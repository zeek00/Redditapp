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



function App() {
  return (
    <Router>
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
