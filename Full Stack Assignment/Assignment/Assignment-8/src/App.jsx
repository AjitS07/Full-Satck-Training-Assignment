import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import Greeting from './Greeting';
import ProfileCard from './ProfileCard';
import StatusMessage from './StatusMessage';
import Counter from './Counter';
import LikeButton from './LikeButton';
import Timer from './Timer';
import ColorPicker from './ColorPicker';
import TextInput from './TextInput';
import TodoList from './TodoList';

function App() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const [inputText, setInputText] = useState('');

  const handleTextChange = (text) => {
    setInputText(text);}

  return (
    <div>
      <Greeting name ="Rohan Sharma"/>
      <ProfileCard name="Ajit" age={21} email="ajit@example.com" location="Delhi"/>
      <StatusMessage message="Welcome to the application!" />
      <Counter initialValue={0} />
      <LikeButton initialLikes={10} />
      <Timer initialTime={60} />
      <ColorPicker initialColor="#ff0000" />
      <h1>Text Input Example</h1>
      <TextInput onTextChange={handleTextChange} />
      <p>You typed: {inputText}</p>
      <TodoList/>

      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <ToggleSwitch toggleState={handleToggle} />
    </div>
  );
}

export default App;
