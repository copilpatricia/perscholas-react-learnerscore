import { learnerData } from './data/learnerData';
import {useState} from 'react'
import './App.css';
import Learner from './components/Learner';



function App() {
  const [learners, setLearners] = useState(learnerData);
  return (
    <div className="App">
      <h1>Learner App</h1>
      <Learner learners={learners}></Learner>
    </div>
  );
}

export default App;
