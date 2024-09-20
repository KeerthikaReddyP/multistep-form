const Step1=({formData, setFormData})=>{
    
    return <div>
        <h2>Personal details</h2>
        <div>
            <label>Name : </label>
            <input type="text" name="name"/>
        </div>
        <div>
            <label>Email : </label>
            <input type="email" name="email"/>
        </div>
        <div>
            <label>Mobile no. : </label>
            <input type="text" name="mobile"/>
        </div>
    </div>
}

export default Step1;