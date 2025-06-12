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
            <div className="row aling-end">
            <Link  to={"/form-contact"} className="btn btn-primary">Agregar Contacto</Link>
            </div>

            {store.contacts.map((item) =>
                <div key={item.id} className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={avatar} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}