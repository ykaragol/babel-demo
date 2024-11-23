import { useState } from "react";
import ArrowRight from "./assets/arrow-right.svg";

export default function DummyReactComponent() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((c) => c++);
  };

  return (
    <div>
      Your click count: {clickCount}.
      <button onClick={handleClick}>Click</button>
      <ArrowRight />
    </div>
  );
}
