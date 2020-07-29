import React, { useContext, createContext, useState } from "react";
import { Container, DescriptionText } from "./styles";

interface RadioContextData {
  onChangeSelect(id: number): void;
  selected: number;
}

interface Props {
  children: React.ReactNode;
  description: string;
}

const RadioContext = createContext<RadioContextData>({} as RadioContextData);

export const RadioGroup: React.FC = ({ children, description }) => {
  const [selected, setSelected] = useState(-1);

  function onChangeSelect(id: number) {
    setSelected(id);
  }

  return (
    <RadioContext.Provider value={{ onChangeSelect, selected }}>
      <Container>
        <DescriptionText>{description}</DescriptionText>
        {children}
      </Container>
    </RadioContext.Provider>
  );
};

export const useRadio = () => {
  return useContext(RadioContext);
};
