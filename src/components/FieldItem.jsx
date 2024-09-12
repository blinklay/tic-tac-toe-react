import styled from "styled-components";
import { WIN_PATTERN } from "../tools/Constants";

const Item = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  font-size: 2rem;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: #c1c1c1;
  }

  &:active {
    background-color: #e1e1e1;
  }
`;

export default function FieldItem({
  id,
  children,
  setCurrentStep,
  currentStep,
  setFields,
  fields,
}) {
  return (
    <Item
      onClick={() => {
        if (fields[id] !== "") return;
        setCurrentStep((prev) => (prev === "x" ? "0" : "x"));
        setFields((prev) =>
          prev.map((item, index) => {
            if (index === id) {
              item = currentStep;
            }
            return item;
          })
        );
      }}
    >
      {children}
    </Item>
  );
}
