const Step2 = ({ formData, setFormData,errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Address</h2>
      <div>
        <label className="block text-gray-700">Address line-1 :</label>
        <input
          type="text"
          placeholder="Enter Address Line 1"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
      </div>
      <div>
        <label className="block text-gray-700">Address line-2 :</label>
        <input
          type="text"
          placeholder="Enter Address Line 2"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-gray-700">City :</label>
        <input
          type="text"
          placeholder="Enter city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
      </div>
      <div>
        <label className="block text-gray-700">State :</label>
        <input
          type="text"
          placeholder="Enter state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
      </div>
      <div>
        <label className="block text-gray-700">PIN code :</label>
        <input
          type="text"
          placeholder="Enter pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
      </div>
    </div>
  );
};

export default Step2;
