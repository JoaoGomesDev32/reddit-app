import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../features/comments/commentsSlice";
import { RootState, AppDispatch } from "../store";
import "./Comments.scss";

interface CommentsProps {
  postId: string;
}

const Comments: React.FC<CommentsProps> = ({ postId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { comments, status } = useSelector((state: RootState) => state.comments);

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);

  if (status === "loading") return <p>Carregando comentários...</p>;
  if (status === "failed") return <p>Erro ao carregar comentários.</p>;

  return (
    <div className="comments">
      <h4>Comentários:</h4>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p><strong>{comment.author}:</strong> {comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;