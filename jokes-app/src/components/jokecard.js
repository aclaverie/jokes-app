import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

function JokeCard(props){
    const [isShown, setIsShown] = useState(false);

    function showIt(){
        setIsShown(prevShown => !prevShown);
    }
    return (
        <>
            <div id={props.jokes.id}>
                {props.jokes.setup && <div className="joke-setup">{props.jokes.setup}</div>}
                {isShown && <div className="joke-punch">{props.jokes.punchline}</div>} 
            </div>
            <Button variant={"outlined"} onClick={showIt}>Show Punchline</Button>
        </>
    )
}

export default JokeCard;