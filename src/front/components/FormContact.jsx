// controlar los inputs: un estado por cada input con un onchange para cada uno
// en el handelsubmit: preven defaul, despues ejecutar el POST que tengo definido en el service de contac enviandole todos los datos de los imputs(dataToSend) 

import { useState } from "react";

export const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
   event.preventDefault()
   const dataToSend = {
       name,
       phone,
       email,
       address
   }
   
  }

  return (
    <div className="container mt-4">
      <h2>Add Contacts</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Agregar Contacto
          </button>
        </div>
      </form>
    </div>
  );
};
