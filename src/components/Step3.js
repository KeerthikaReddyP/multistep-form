const Step3 = ({ formData }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
      <div>
        <p className="m-2">Name : {formData.name}</p>
        <p className="m-2">Email : {formData.email}</p>
        <p className="m-2">Mobile number : {formData.mobile}</p>
        <p className="m-2">Address Line 1 : {formData.address1}</p>
        <p className="m-2">Address Line 2 : {formData.address2}</p>
        <p className="m-2">City : {formData.city}</p>
        <p className="m-2">State : {formData.state}</p>
        <p className="m-2">Pincode : {formData.pincode}</p>
      </div>
    </div>
  );
};

export default Step3;
