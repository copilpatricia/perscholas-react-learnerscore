import Score from "./Score";

function Learner({learners}) {
   return (
    <>
    {learners.map((learner) => (
       
        <div>
            <h1>Name: {learner.name}</h1>
            <p>Bio: {learner.bio}</p>
            <Score learner={learner}></Score>
            
        </div>

        
    ))}
    </>
   )
}

export default Learner;