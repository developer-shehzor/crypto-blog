import Comment from "../Comment/Comment"
import styles from "./CommentList.module.css"


const CommentList = ({comments}) => {
  return (
    <div className={styles.CommentListWrapper}>
      <div className={styles.commentList}>
        {comments.length === 0 ? 
        (
          <div className={styles.noComments}>No comments posted</div>
        ) : (
          comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))
        )}
      </div>
    </div>
  )
}

export default CommentList
