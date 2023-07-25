

const PopulatePosts = (props) => {
// console.log('img ' + JSON.stringify(props.onPost.imageUrl));

const clickNumCommentsHandler = () => {
    console.log('clicked numcomments handler');
    
}

    return <li key={props.onPost.id}>
        <div>
            <div>
                <h2>{props.onPost.title}</h2>
                <img src={`${props.onPost.imageUrl}`} alt="post title name" ></img>
                <div>
                    <div>
                        <p>{props.onPost.selftext}</p>
                        <p>{props.onPost.subreddit_name_prefixed}</p>
                        <p>{`ups ${props.onPost.ups}`}</p>
                        <p>{`downs ${props.onPost.downs}`}</p>
                    </div>
                    
                <button onClick={clickNumCommentsHandler}>{`${props.onPost.num_comments} Comments`}</button>

                </div>
            </div>
        </div>
    </li>
}

export default PopulatePosts