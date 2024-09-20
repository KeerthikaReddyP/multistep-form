const Step3=({formData})=>{
    return <div>
        <h2>Confirmation</h2>
        <div>
            <p>Name : {formData.name}</p>
            <p>Email : {formData.email}</p>
            <p>Mobile number : {formData.mobile}</p>
            <p>Address Line 1 : {formData.address1}</p>
            <p>Address Line 2 : {formData.address2}</p>
            <p>City : {formData.city}</p>
            <p>State : {formData.state}</p>
            <p>Pincode : {formData.pincode}</p>
        </div>
    </div>
}

export default Step3;