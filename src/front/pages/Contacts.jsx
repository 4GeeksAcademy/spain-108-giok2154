import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import { getContact } from "../Services/contactc.js"
import avatar from "../assets/img/avatar.png"
import { FormContact } from "../components/FormContact.jsx"
import { Link } from "react-router-dom"

export const Contacts = () => {

    const { store } = useGlobalReducer()

    useEffect(() => {
        const dataFetch = async () => {
            // crear valor al cual le asignaremos lo que devuelve el getContactc que esta en services de contact
            const data = await getContact()
        }
        dataFetch()
    })

    return (
        <div className="container">
            <h1>Contacts</h1>
            {store.contacts.map((item) =>
                <div key={item.id} className="card mb-3">
                    <div className="row g-0 align-items-center">
                        {/* Imagen */}
                        <div className="col-12 col-md-4 text-center p-3">
                            <img src={avatar} className="img-fluid rounded-start" alt="avatar" />
                        </div>

                        {/* Contenido + iconos */}
                        <div className="col-12 col-md-8">
                            <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-start">

                                {/* Información */}
                                <div>
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.phone}</p>
                                    <p className="card-text">
                                        <small className="text-body-secondary">{item.email}</small>
                                    </p>
                                    <p className="card-text">
                                        <small className="text-body-secondary">{item.address}</small>
                                    </p>
                                </div>

                                {/* Iconos */}
                                <div className="text-md-end mt-3 mt-md-0">
                                    <spam className="btn btn-sm btn-outline-primary me-2 mb-2">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </spam>
                                    <spam className="btn btn-sm btn-outline-danger mb-2">
                                        <i className="fa-solid fa-trash"></i>
                                    </spam>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="row aling-end">
                <Link to={"/form-contact"} className="btn btn-primary">Agregar Contacto</Link>
            </div>
        </div>
    )
}