import { useRef, useState } from "react";

function ShowImage() {
  const imageRef = useRef();
  const [imgUrl, setImgUrl] = useState("");
  const [display, setDisplay] = useState("none");
  const showAnImage = () => {
    setImgUrl("../../public/images/image1.jpg");
    setDisplay("block");
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
        <button className="btn" onClick={showAnImage}>
          Click - Image
        </button>
        <img
          ref={imageRef}
          src={imgUrl}
          alt="an image"
          style={{ display: display, width: "25rem", borderRadius: "1rem" }}
        />
      </div>
    </>
  );
}

export default ShowImage;
