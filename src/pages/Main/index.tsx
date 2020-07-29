import React from "react";

import { RadioGroup, RadioButton } from "../../components/Radio";
import { Container } from "./styles";

const Main: React.FC = () => {
  function handleSelect(id: number) {
    console.log(id);
  }

  return (
    <Container>
      <RadioGroup description="Which do you want to eat?">
        <RadioButton id={0} text="Pizza" />
        <RadioButton id={1} text="Lasagna" />
        <RadioButton id={2} text="Pasta" />
      </RadioGroup>
    </Container>
  );
};

export default Main;
