import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px 10px;
  border-bottom-color: #000;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const CircleView = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #7159c1;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background: #7159c1;
`;

export const OptionText = styled.Text`
  color: ${(props) => (props.checked ? "#7159c1" : "#ccc")};
  font-weight: bold;
`;
