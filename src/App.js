import { useEffect, useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const validateStep = () => {
    let errors = {};
    if (step === 1) {
      if (!formData.name) errors.name = "Name is required";
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
        errors.email = "Enter valid email";
      if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
        errors.mobile = "Enter 10-digit mobile numner";
    } else if (step === 2) {
      if (!formData.address1) errors.address1 = "Address Line 1 is required";
      if (!formData.city) errors.city = "City is required";
      if (!formData.state) errors.state = "State is required";
      if (!formData.pincode || !/^\d{6}$/.test(formData.pincode))
        errors.pincode = "Enter Valid pincode";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBack = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      alert("Form submitted");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {step === 3 && <Step3 formData={formData} />}

          <div className="flex justify-center mt-4">
            {step > 1 && <button onClick={handleBack} className="m-2 px-4 py-2 bg-blue-500 text-white rounded-md">Back</button>}
            {step < 3 ? (
              <button onClick={handleNext} className="m-2 px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
            ) : (
              <button onClick={handleSubmit} className="m-2 px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
