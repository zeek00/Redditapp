import DisplayComments from "./DisplayComments"
import { Fragment } from "react"
import styles from './DisplayComments.module.css'
import DisplayMoreComments from "./DisplayMoreComments"

const Comments = (props) => {
    const comments = props.onComments
    const moreComments = props.onMore
    //add created at...
    console.log('comments replies ' + JSON.stringify(comments));



    const displayRepliesHandler = (oneComment) => {
        console.log('oneComment' + JSON.stringify(oneComment));
        const commentReplies = oneComment.replies

        if (commentReplies.length > 0) {
            return <ul className={styles.replies}>
                {commentReplies.map(oneReply => {

                    return <li className={styles.firstli} key={oneReply.id} >
                        <DisplayComments onComment={oneReply} />

                        {oneReply.replies.length > 0 && displayRepliesHandler(oneReply)}
                    </li>
                })}
                {oneComment.moreReplies.length > 0 && <DisplayMoreComments onMore={oneComment.moreReplies} />}

                <li >

                </li>
            </ul>
        }
    }

    //loop replies
    return <ul className={styles.container} >
        {comments.map(oneComment => {
            return <li className={styles.secondli} key={oneComment.id}>
                <DisplayComments onComment={oneComment} />
                {oneComment.replies.length > 0 && displayRepliesHandler(oneComment)} 

            </li>
        })}
        {moreComments.length > 0 && <DisplayMoreComments onMore={moreComments} />
        }
    </ul>



}

export default Comments