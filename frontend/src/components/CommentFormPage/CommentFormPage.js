import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comment } from '../../../../backend/models/comment.model';
function CommentFormPage({ match }) {
  const { photoId } = useParams();
 
  const [comment, setComment] = useState('');

  

  const handleCommentSubmit = async () => {
    try {
      const response = await fetch('https://album-app.onrender.com/album/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          photoId: photoId,
          comment: comment,
        }),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error || 'Failed to submit comment');
      }

   
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div className="comment-form-container">
      <h2>Leave a Comment</h2>
      <textarea
        placeholder="Enter your comment..."
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button onClick={handleCommentSubmit}>Submit Comment</button>
    </div>
  );
}

export default CommentFormPage;
