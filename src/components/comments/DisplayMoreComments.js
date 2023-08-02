import { useState } from "react";
import DisplayComments from "./DisplayComments";

//to finish
const DisplayMoreComments = (props) => {
const [isButton, setIsButton] = useState(true)
const [comm, setComm] = useState([])
    const moreComments = props.onMore

    const clickedMoreCommentsHandler = () => {
        //manage to display moreComments content by comment id
        console.log('clicked more comments' + JSON.stringify(moreComments));
        //setIsButton(false)
    }

    return <div>

    {isButton?<button onClick={clickedMoreCommentsHandler}>More Comments {moreComments.length}</button>:
<DisplayComments />
}</div>



}

export default DisplayMoreComments