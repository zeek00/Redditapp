import { Link } from "react-router-dom"

const HomePage = (props) => {

    return <div>Home page
         <ul>
            <li>
                <Link to="/popular">Popular Posts</Link>
            </li>
            <li>
                <Link to="/best">Best Posts</Link>
            </li>
            <li>
                <Link to="/">Home Page</Link>
            </li>
      

    </ul>
    </div>
}

export default HomePage