import { useRef, useState } from "react";

function EditText() {
  const inputRef = useRef();
  const [display, setDisplay] = useState("none");
  const [text, setText] = useState(
    "Puedes editar este texto pulsando en el boton"
  );
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setDisplay("block");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(text);
    setDisplay("none");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button className="btn" onClick={handleClick}>
          CLick - Edit
        </button>
        <form onSubmit={handleSubmit}>
          <input
            style={{ display: display }}
            ref={inputRef}
            type="text"
            value={text}
            onChange={handleChange}
          />
        </form>
        <p>{text}</p>
      </div>
    </>
  );
}

export default EditText;
