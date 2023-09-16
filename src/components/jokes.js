import React from "react";

export default function Jokes(props) {
    const [isShown , setIsShown] = React.useState(false)
    function handleToggle() {
        return setIsShown(prevState => !prevState)
    }
    return (
        <div className={'jokeContainer'}>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={handleToggle}>Show Punchline</button>
        </div>

    )
}
