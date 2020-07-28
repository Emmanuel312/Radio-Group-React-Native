import React, { useState } from "react";
import { Container } from "./styles";
import RadioButton from "../RadioButton";

interface Props {
  onChangeSelect(id: number): void;
}

const RadioGroup: React.FC<Props> = ({ children, onChangeSelect }) => {
  const [selected, setSelected] = useState(-1);

  function changeSelect(id: number) {
    setSelected(id);
    onChangeSelect(id);
  }

  function renderChildren() {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, { changeSelect, selected });
    });
  }

  return <Container>{renderChildren()}</Container>;
};

export default RadioGroup;
