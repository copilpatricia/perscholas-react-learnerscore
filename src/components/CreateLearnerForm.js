import { useState } from "react";
import { ClickedButton} from "./Button";

function CreateLearnerForm({ setLearners, learners }) {
    //local state for the new lerner
  const [newLearner, setNewLearner] = useState({
    name: "",
    bio: "",
    scores: [],
  });

  //handles the changes on the inputs
  const handleChange = (e) => {
    setNewLearner({
      ...newLearner,
      //name - is the attribute - we use for both name and id 
      [e.target.name]: e.target.value,
    });
  };

  // be call on the form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    //add new learner to the learner array
    setLearners([newLearner, ...learners]);

    //reset the local new learner object
    setNewLearner({
      name: "",
      bio: "",
      scores: [],
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={newLearner.name}
          onChange={handleChange}
        />

        <label htmlFor="bio">Bio: </label>
        <textarea
          name="bio"
          id="bio"
          value={newLearner.bio}
          onChange={handleChange}
        ></textarea>

        
        <ClickedButton className="btn"></ClickedButton>
        
      </form>
    </div>
  );
}

export default CreateLearnerForm;
