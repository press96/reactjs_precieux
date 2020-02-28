import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <form>
        <label>
            Nom :
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
        </form>
    </div>
  );
}

export default App;
