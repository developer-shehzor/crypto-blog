import Comment from "../Comment/Comment"
import styles from "./CommentList.module.css"


const CommentList = ({comments}) => {
  return (
    <div className={styles.CommentListWrapper}>
      {comments.length === 0 ? 
      (
        <div className={styles.noComments}>No comments posted</div>
      ) : 
      comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  )
}

export default CommentList
