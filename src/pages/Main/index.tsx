import React from "react";

import { RadioGroup, RadioButton } from "../../components/Radio";
import { Container } from "./styles";

const Main: React.FC = () => {
  function handleSelect(id: number) {
    console.log(id);
  }

  return (
    <Container>
      <RadioGroup onChangeSelect={handleSelect}>
        <RadioButton id={0} text="Pizza"></RadioButton>
        <RadioButton id={1} text="Lasagna"></RadioButton>
        <RadioButton id={2} text="Pasta"></RadioButton>
      </RadioGroup>
    </Container>
  );
};

export default Main;
