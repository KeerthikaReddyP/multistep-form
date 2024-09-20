import { useEffect, useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  const [step, setStep] = useState(1);
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    mobile:'',
    address1:'',
    address2:'',
    city:'',
    state:'',
    pincode:'',
  });

  useEffect(()=>{
    const savedData=localStorage.getItem("formData");
    if(savedData) setFormData(JSON.parse(savedData));
  },[]);

  useEffect(()=>{
    localStorage.setItem("formData",JSON.stringify(formData));
  },[formData]);

  const handleBack = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit=()=>{
    console.log("Form submitted");
  };

  return (
    <div className="m-4 p-2 bg-amber-600">
      {step === 1 && <Step1 formData={formData} setFormData={setFormData}/>}
      {step === 2 && <Step2 formData={formData} setFormData={setFormData}/>}
      {step === 3 && <Step3 formData={formData}/>}
      {step > 1 && <button onClick={handleBack}>Back</button>}
      {step < 3 ? (
        <button onClick={handleNext}>Next</button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
}

export default App;
