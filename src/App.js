import { learnerData } from './data/learnerData';
import {useState} from 'react'
import Learner from './components/Learner';
import CreateLearnerForm from './components/CreateLearnerForm';

import "./App.css"


function App() {
  const [learners, setLearners] = useState(learnerData);
  return (
    <div className="App">
      <h1>Learner App</h1>
      <CreateLearnerForm setLearners={setLearners} learners={learners} />
      <Learner learners={learners}></Learner>
    </div>
  );
}

export default App;
