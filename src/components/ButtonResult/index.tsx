import * as React from "react";
import "./index.css";
export interface IButtonResultProps {
  handler: Function;
}

export function ButtonResult(props: IButtonResultProps) {
  const { handler } = props;
  return (
    <div className="btnResult" onClick={() => handler()}>
      =
    </div>
  );
}
