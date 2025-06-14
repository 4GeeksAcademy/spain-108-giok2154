// controlar los inputs: un estado por cada input con un onchange para cada uno
// en el handelsubmit: preven defaul, despues ejecutar el POST que tengo definido en el service de contac enviandole todos los datos de los imputs(dataToSend) 

import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { addContact, getContact } from "../Services/contactc.js"; // ajusta la ruta según donde esté tu servicio
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

export const FormContact = () => {
 const { dispatch } = useGlobalReducer()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataToSend = { name, phone, email, address };
    await addContact(dataToSend);
   const data = await getContact()
   dispatch({type: "contacts", payLoad: data })

    // navegamos al listado de contactos
    navigate("/contacts")
  };

  return (
    <div className="row g-0 align-items-center">
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
