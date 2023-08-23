export default function Jokes(props) {
    return (
        <div className={'jokeContainer'}>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
        </div>
    )
}
