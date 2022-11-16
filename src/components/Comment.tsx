import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string)=> void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function hendleDeleteComment() {
    onDeleteComment(content);
  }
  function handleLikeComment() {
    setLikeCount((state)=>{
        return state + 1
    });
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/PauloHXL.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.autherAndTime}>
              <strong>Paulo Henrique</strong>
              <time title="11 de Julho às 16:51" dateTime="2022-07-11 16:51:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={hendleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
