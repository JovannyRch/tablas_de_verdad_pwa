import * as React from "react";
import "./index.css";

export interface IButtonProps {
  name: string;
}

export function ButtonVar(props: IButtonProps) {
  const { name } = props;
  return <div className="button-var">{name}</div>;
}
