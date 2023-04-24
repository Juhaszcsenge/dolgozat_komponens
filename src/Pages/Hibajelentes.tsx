import React, {useState } from "react";

interface Form{
    name: string;
    email: string;
    message: string;
}

const Hibajelentes = () => {
    const [form, setForm] = useState<Form>({
        name:"",
        email:"",
        message:"",
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setForm((prevFields) => ({
          ...prevFields,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!form.name || !form.email || !form.message) {
          alert("Minden mező kitöltése kötelező!");
          return;
        }
        setFormSubmitted(true);
      };
    

    return(
        <div className="container">
            <h1>Hibajelentés</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">
                        Név
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">
                        Email
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    id="contactInput"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="textarea" className="form-label">
                        Üzenet
                    </label>
                    <textarea
                    className="form-control"
                    id="messageTextarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                     />
                </div>
                <button type="submit" className="btn btn-primary">
                    Beküldés
                </button>
            </form>
            {formSubmitted && (
        <div className="alert alert-success mt-3" role="alert">
          Köszönjük a hibabejelentést!
        </div>
      )}
    </div>
  );
};

export default Hibajelentes;
