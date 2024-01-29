function Score({learner}) {
    console.log(learner.scores)
    return (
        <>
        {learner.scores.map((score) => (
            <>
                <h1>Scores</h1>
                <p>{score.date}</p>
                <p>{score.score}</p>
            </>

            ))
         }
        </>
    )

}

export default Score