import { renderToString } from "react-dom/server";
import DiceRoll from "./react-module";

export function getReactOutput() : string{
  return renderToString(<DiceRoll />);
}
