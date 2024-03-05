export default function Score({ score }) {
    return(
        <div>
            <p>Date: {score.date}</p>
            <p>Score: {score.score}</p>
        </div>
    );
}