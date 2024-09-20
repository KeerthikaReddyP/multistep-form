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
  const [errors,setErrors]=useState({});

  useEffect(()=>{
    const savedData=localStorage.getItem("formData");
    if(savedData) setFormData(JSON.parse(savedData));
  },[]);

  useEffect(()=>{
    localStorage.setItem("formData",JSON.stringify(formData));
  },[formData]);


  const validateStep = () => {
    let errors = {};
    if (step === 1) {
      if (!formData.name) errors.name = 'Name is required';
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Enter valid email';
      if (!formData.phone || !/^\d{10}$/.test(formData.phone)) errors.phone = 'Enter 10-digit mobile numner';
    } else if (step === 2) {
      if (!formData.address1) errors.address1 = 'Address Line 1 is required';
      if (!formData.city) errors.city = 'City is required';
      if (!formData.state) errors.state = 'State is required';
      if (!formData.zip || !/^\d{6}$/.test(formData.zip)) errors.zip = 'Enter Valid pincode';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleBack = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit=()=>{
    if(validateStep) alert("Form submitted");
  };

  return (
    <div className="m-8 p-4 w-1/2 border border-black">
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
