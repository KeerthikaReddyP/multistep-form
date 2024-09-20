const Step2 = ({ formData, setFormData,errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h2>Address</h2>
      <div>
        <label>Address line-1 :</label>
        <input
          type="text"
          placeholder="Enter Address Line 1"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
        />
        {errors.address1 && <p>{errors.address1}</p>}
      </div>
      <div>
        <label>Address line-2 :</label>
        <input
          type="text"
          placeholder="Enter Address Line 2"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City :</label>
        <input
          type="text"
          placeholder="Enter city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p>{errors.city}</p>}
      </div>
      <div>
        <label>State :</label>
        <input
          type="text"
          placeholder="Enter state"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <p>{errors.state}</p>}
      </div>
      <div>
        <label>PIN code :</label>
        <input
          type="text"
          placeholder="Enter pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
        {errors.pincode && <p>{errors.pincode}</p>}
      </div>
    </div>
  );
};

export default Step2;
