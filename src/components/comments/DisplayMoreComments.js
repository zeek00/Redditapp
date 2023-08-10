import styles from './DisplayComments.module.css'

const DisplayMoreComments = (props) => {
    const moreComments = props.onMore

    const clickedMoreCommentsHandler = () => {
        console.log('clicked more comments');
        
    }

    return <button className={styles.moreComments} onClick={clickedMoreCommentsHandler}>More Comments {moreComments.length}</button>


}

export default DisplayMoreComments