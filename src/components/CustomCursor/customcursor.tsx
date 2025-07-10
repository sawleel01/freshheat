"use client";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0.2}
      innerStyle={{ backgroundColor: "#ff0000" }}
      outerStyle={{ border: "2px solid #ff0000" }}
      clickables={["a", "button", "input", "textarea", "select", "label"]}
    />
  );
};

export default CustomCursor;
