import Score from "./Score";
import {Button} from "./Button";

import "./Button.css";


function Learner({learners}) {

    const handleDelete = (e) => {
        //TODO implement delete 
    }

   return (
    <>
    {learners.map((learner, index) => (
       
        <div>
            <h1>Index: {index}</h1>
            <h1>Name: {learner.name}
            <Button onClick={handleDelete} className="btn">Delete</Button>
            </h1>
            <p>Bio: {learner.bio}</p>
            <Score learner={learner}></Score>
            
        </div>

        
    ))}
    </>
   )
}

export default Learner;