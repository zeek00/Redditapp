import DisplayComments from "./DisplayComments";

//to finish
const DisplayMoreComments = (props) => {
    const moreComments = props.onMore

    const clickedMoreCommentsHandler = () => {
        //manage to display moreComments content by comment id
        console.log('clicked more comments' + JSON.stringify(moreComments));
    }

    return <div>
    <button onClick={clickedMoreCommentsHandler}>More Comments {moreComments.length}</button>:
<DisplayComments />
</div>



}

export default DisplayMoreComments