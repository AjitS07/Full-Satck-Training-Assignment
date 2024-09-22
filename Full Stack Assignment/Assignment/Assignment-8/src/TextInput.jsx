import React, { useState } from 'react';

function TextInput({ onTextChange }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  return <input type="text" value={text} onChange={handleChange} />;
}

export default TextInput;
