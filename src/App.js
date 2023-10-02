import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Results from './Components/Results';
import requests from './requests';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className='app'>
      <Header></Header>
      <Nav setSelectedOption={setSelectedOption}></Nav>
      <Results selectedOption={selectedOption}></Results>
    </div>
  );
}

export default App;
