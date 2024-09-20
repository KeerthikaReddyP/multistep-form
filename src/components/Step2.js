const Step2=({formData,setFormData})=>{

    const handleChange=(e)=>{
        const {key,value}=e.target;
        setFormData((prevData)=>({...prevData,[key]:value}));
    };

    return <div>
        <h2>Address</h2>
        <div>
            <label>Address line-1 :</label>
            <input type="text" name="address1" value={formData.address1} onChange={handleChange}/>
        </div>
        <div>
            <label>Address line-2 :</label>
            <input type="text" name="address2" value={formData.address2} onChange={handleChange}/>
        </div>
        <div>
            <label>City :</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange}/>
        </div>
        <div>
            <label>State :</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange}/>
        </div>
        <div>
            <label>PIN code :</label>
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange}/>
        </div>
    </div>
}

export default Step2;