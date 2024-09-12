import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import FieldItem from "./FieldItem";

const Field = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
  width: 300px;
  height: 300px;
`;

// Stateless component
export default function AppLayout({
  fields,
  setFields,
  currentStep,
  setCurrentStep,
}) {
  return (
    <Field>
      {fields.map((field, index) => (
        <FieldItem
          id={index}
          key={uuidv4()}
          currentStep={currentStep}
          setFields={setFields}
          setCurrentStep={setCurrentStep}
          fields={fields}
        >
          {field}
        </FieldItem>
      ))}
    </Field>
  );
}
