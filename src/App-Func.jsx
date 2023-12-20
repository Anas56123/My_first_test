import { useState } from 'react';
import Button from "./Button"

function App() {
  const [inputValue, setInputValue] = useState(''); // State to hold input value
  const [arrayValues, setArrayValues] = useState([]); // State to hold the array

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update input value state
  };

  const handleAddToArray = () => {
    if (inputValue.trim() !== '') {
      setArrayValues([...arrayValues, inputValue]); // Add input value to the array
      setInputValue(''); // Clear the input field after adding to the array
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a value"
      />
      <Button onClick={handleAddToArray}>Post</Button>

      <ul style={{listStyle: 'none'}}>
        {/* Display array values */}
        {arrayValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
