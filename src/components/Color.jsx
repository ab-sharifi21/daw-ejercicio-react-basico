import { useState } from "react";

function Color() {
  const generateRandoNumber = () => {
    return Math.floor(Math.random() * 255 + 1);
  };

  const generateRandomColor = () => {
    const randomColor = `rgb(${generateRandoNumber()}, ${generateRandoNumber()}, ${generateRandoNumber()})`;
    return randomColor;
  };

  const [color, setColor] = useState("#eb5e28");

  const changeColor = () => {
    setColor(generateRandomColor());
  };

  return (
    <>
      <section>
        <button
          style={{
            backgroundColor: color,
            padding: "1rem 2rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
          onClick={changeColor}
        >
          Change Color
        </button>
      </section>
    </>
  );
}

export default Color;
