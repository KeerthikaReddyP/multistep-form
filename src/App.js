import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {

  const [step,setStep]=useState(1);

  return (
    <div className="m-4 p-2 bg-amber-600">
      {step===1 && <Step1 />}
      {step===2 && <Step2 />}
      {step===3 && <Step3 />}
    </div>
  );
}

export default App;
