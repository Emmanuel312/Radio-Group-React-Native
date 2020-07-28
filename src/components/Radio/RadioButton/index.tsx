import React from "react";
import { Container, Circle, OptionText, CircleView } from "./styles";

interface Props {
  changeSelect?(id: number): void;
  text: string;
  id: number;
  selected?: number;
}

const RadioButton: React.FC<Props> = ({ id, text, changeSelect, selected }) => {
  const checked = selected === id;

  return (
    <Container onPress={() => changeSelect(id)}>
      <CircleView>{checked && <Circle />}</CircleView>
      <OptionText checked={checked}>{text}</OptionText>
    </Container>
  );
};

export default RadioButton;
