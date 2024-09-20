const Step1 = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Personal details</h2>
      <div>
        <label className="block text-gray-700">Name : </label>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-gray-700">Email : </label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-gray-700">Mobile no. : </label>
        <input
          type="text"
          placeholder="Enter mobile number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
      </div>
    </div>
  );
};

export default Step1;
