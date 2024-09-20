const Step1=({formData, setFormData})=>{

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prevData)=>({...prevData,[name]:value}));
    };
    
    return <div>
        <h2>Personal details</h2>
        <div>
            <label>Name : </label>
            <input type="text"  placeholder="Enter name" name="name" value={formData.name} onChange={handleChange}/>
        </div>
        <div>
            <label>Email : </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div>
            <label>Mobile no. : </label>
            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange}/>
        </div>
    </div>
}

export default Step1;