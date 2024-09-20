const Step1=({formData, setFormData, errors})=>{

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prevData)=>({...prevData,[name]:value}));
    };
    
    return <div>
        <h2>Personal details</h2>
        <div>
            <label>Name : </label>
            <input type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange}/>
            {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
            <label>Email : </label>
            <input type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
            <label>Mobile no. : </label>
            <input type="text" placeholder="Enter mobile number" name="mobile" value={formData.mobile} onChange={handleChange}/>
            {errors.mobile && <p>{errors.mobile}</p>}
        </div>
    </div>
}

export default Step1;