import { useState } from "react";
import "./Button.css";

function Button({ children, type, onClick, className }) {
    return (
        <button onClick={onClick} type={type} className={"btn" + className}>
      {children} 
    </button>
  );
}

function ClickedButton() {
    const [isClicked, setIsClicked] = useState(false);

    function handleClickButton() {
        setIsClicked(!isClicked)
    }

    return (
        <Button onClick={handleClickButton} className={isClicked && "clicked"}>
            {isClicked ? "New learner added!" : "Create new learner"}
        </Button>
    )
}



export {ClickedButton, Button}

// style the button using the example from the course
