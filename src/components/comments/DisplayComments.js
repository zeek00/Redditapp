
const DisplayComments = (props) => {
const comment = props.onComment

    return <div>
        <h3>{comment.author}</h3><p>{comment.body}</p>
    </div>
}

export default DisplayComments