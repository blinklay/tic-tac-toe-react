import { useState } from "react";
import AppLayout from "./components/AppLayout";

// StateFull component
function App() {
  const [fields, setFields] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentStep, setCurrentStep] = useState("x");

  return (
    <AppLayout
      fields={fields}
      setFields={setFields}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />
  );
}

export default App;
