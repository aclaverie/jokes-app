import React from 'react';

function JokeCard(props){
    // console.log(props)
    return (
        <>
            <div className="joke-setup">{props.jokes.setup}</div>
            <div className="joke-punch">{props.jokes.punchline}</div> 
        </>
    )
}

export default JokeCard;