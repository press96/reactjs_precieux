import React from 'react';
import './App.css';
import Header from './components/home/header/index'
import Form from './components/home/form/index'
import Creation from './components/home/creation/index'


function App() {
  return (
    <div>
        <div>
            <Header></Header>
            <Form></Form>
            <Creation></Creation>
        </div>
    </div>
  );
}

export default App;
