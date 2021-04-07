import { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState(1);

  const handlePlus = () => {
    setTotal(total + 1);
  }

  const handleMinus = () => {
    if(total > 0){
      setTotal(total - 1);
    }
  }

    return (
    <div className="App">
      <div className="container">
        <button onClick = {handleMinus} className="minus">
            <span>
                <i className="fas fa-minus"></i>
            </span>
        </button>
        <div className="total">
            {total}
        </div>
        <button onClick = {handlePlus} className="plus">
            <i className="fas fa-plus"></i>
        </button>
    </div>
    </div>
  );
}

export default App;
