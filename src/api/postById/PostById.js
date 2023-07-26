import { useParams } from "react-router-dom"

const PostById = (props) => {
    const {id} = useParams()
    console.log('postbyid' + JSON.stringify(id));
    
    

    return <div>id</div>
}

export default PostById