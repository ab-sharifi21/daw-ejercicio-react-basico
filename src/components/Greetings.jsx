import { useRef, useState } from "react";

function Greetings() {
  const myRef = useRef();
  const [text, setText] = useState("");

  const handleClick = () => {
    setText("Helloooooooooo there! 😜");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <button className="btn" onClick={handleClick}>
        Click to Greet
      </button>
      <p ref={myRef} style={{ marginTop: "1rem" }}>
        {text}
      </p>
    </div>
  );
}

export default Greetings;
