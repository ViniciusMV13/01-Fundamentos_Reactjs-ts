import styles from "./Comment.module.css";
import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
content: string;
onDeleteComment: (comment: string) => void;

}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcus Vinicius</strong>
              <time
                title="06 de fevereiro as 15:23h"
                dateTime="2023-02-06 15:23:23"
              >
                Publicado há 1h
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment} >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
