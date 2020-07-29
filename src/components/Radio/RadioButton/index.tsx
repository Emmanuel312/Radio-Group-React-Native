import React, { useMemo } from "react";
import { Container, Circle, OptionText, CircleView } from "./styles";
import { useRadio } from "../RadioGroup";

interface Props {
  text: string;
  id: number;
}

const RadioButton: React.FC<Props> = ({ id, text }) => {
  const { onChangeSelect, selected } = useRadio();
  const checked = useMemo(() => id === selected, [selected]);

  function handleSelect() {
    onChangeSelect(id);
  }

  return (
    <Container onPress={handleSelect}>
      <CircleView>{checked && <Circle />}</CircleView>
      <OptionText checked={checked}>{text}</OptionText>
    </Container>
  );
};

export default RadioButton;
