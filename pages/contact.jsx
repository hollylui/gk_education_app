import { useState } from "react";

export default function Contact () {
    const [formData, setFormData]= 
    useState({
        name: '',
        email:'',
        comment:'',
    });
    const [contacts, setContacts]= useState([]);


    // const handleNameInputChange=(e) =>{
//     setFormData((formData)=>{
//         formData,
//         name:e.target.value,
//     )};
// }
    const handleSubmit=(e) =>{
        e.preventDefault();
  console.log(e.target.value);
        setContacts(...contacts, contact);
        console.log(contacts);

        setFormData({
            name: '',
            email:'',
            comment:'',
})
    }


    return (
        <div>
        <h2> We would love to hear fom you!</h2>
        <p>How can we improve our games? What do you like about our games?</p>
        <form>
            <div>
                <label htmlFor="name">
                    <p>Name</p>
                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        className="form-field"
                        onChange={e=> setFormData({...formData, name: e.target.value})}
                        >
                       
                    </input>                        
                </label>
                <label>
                <label>
                    <p>Email</p>
                    <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={e=> setFormData({...formData, email: e.target.value})}
                    className="form-field"></input>
                </label>
                    <p>Comments</p>
                    <input
                        id="comment"
                        type="text"
                        value={formData.comment}
                        onChange={e=> setFormData({...formData, comment: e.target.value})}
                        className="form-field-comment">
                    </input>
                </label>
                <button onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
        </div>

    )
}