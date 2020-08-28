import React from "react";
import "./screen.css";
import { useSelector } from "react-redux";
import { RootStateTable } from "./../store/store";
export interface IScreenProps {
  content: String;
}

const Screen = (props: IScreenProps) => {
  const { expression } = useSelector((state: RootStateTable) => state.table);
  return <div className="display">{expression}</div>;
};

export default Screen;
