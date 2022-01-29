import React, { useState } from "react";
import "./Animation.scss";

const Animation = () => {
  const [element, setElement] = useState(false);
  // const banner = document.getElementsByClassName("banner");
  // const blocks = document.getElementsByClassName("blocks");
  setTimeout(() => {
    setElement(!element);
  }, 10000);

  console.log(element);
  return (
    <div className="amimation-body">
      <div className="margit"></div>
      {element ? <AnimationOne></AnimationOne> : <AnimationTow></AnimationTow>}
    </div>
  );
};

const AnimationOne = () => {
  let elements = [];
  for (let i = 0; i < 400; i++) {
    elements[i] = i;
  }
  return (
    <section>
      <h2>Nirob Roy Joy</h2>
      <div className="banner">
        {elements.map((ele) => {
          return (
            <div
              className="blocks"
              style={{
                animationDelay: `${elements[ele] * 0.05}s`,
              }}
              key={ele}
            ></div>
          );
        })}
      </div>
    </section>
  );
};
const AnimationTow = () => {
  let elements = [];
  for (let i = 0; i < 400; i++) {
    elements[i] = i;
  }
  return (
    <section>
      <h2>
        Bristi..<span className="vs-color">&#8523;</span>..Sumi
      </h2>
      <div className="banner">
        {elements.map((ele) => {
          return (
            <div
              className="blocks-tow"
              style={{
                animationDelay: `${elements[ele] * 0.05}s`,
              }}
              key={ele}
            ></div>
          );
        })}
      </div>
    </section>
  );
};
export default Animation;
