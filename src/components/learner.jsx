import Score from './score';

export default function Learner({ learner }) {
    return(
        <div>
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            <h3>Scores:</h3>
            {learner.scores.map((score, index) =>{
                return <Score key={index} score={score} />
            })}
        </div>
    );
}
