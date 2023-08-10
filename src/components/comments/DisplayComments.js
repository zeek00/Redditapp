import styles from './DisplayComments.module.css'

const DisplayComments = (props) => {
const comment = props.onComment

    return (
        <div className={styles.commentContain} >
            <h3 className={styles.author}>{comment.author}</h3>
            <p>{comment.body}</p>
        </div>
    );
}

export default DisplayComments