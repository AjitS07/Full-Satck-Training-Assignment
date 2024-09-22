import React, { useState } from 'react';

function LikeButton({ likeCount = 0 }) {
  const [likes, setLikes] = useState(likeCount);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      Likes: {likes}
    </button>
  );
}

export default LikeButton;
