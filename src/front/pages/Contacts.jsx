import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import { addContact, getContact, updateContact } from "../Services/contactc.js"
import avatar from "../assets/img/avatar.png"
import { Link, useNavigate } from "react-router-dom"


export const Contacts = () => {
    const { store, dispatch } = useGlobalReducer()

    const navigate = useNavigate()

    useEffect(() => {
        const dataFetch = async () => {
            const data = await getContact();
            dispatch({ type: "contacts", payload: data })
        }
        dataFetch()
        dispatch ({ type: "currentContact", payload:{}});
        dispatch ({ type: "isEdit", payload: true})
    }, [])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("eliminar")
        if (confirmDelete) {
            const result = await deleteContact(id);
            if (result) {
                console.log("eliminado correctamente");
                const data = await getContact();
                dispatch({ type: "contacts", payload: data })
            }
            else {
                console.log("no eliminado")
            }
        }
    }

    const handleEdit = async (data) => {
        // gurdar en el store datos del este contac para luego editar
        dispatch({ type: "currentContact", payload: data })
        // setear que le indique que esta editando o agregando
        dispatch({ type: "isEdit", payload: true })
        //ir al componente del formulario
        navigate("/form-contact")
    }

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
                                    <span className="btn btn-sm btn-outline-primary me-2 mb-2" onClick={() => handleEdit(item)}>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </span>
                                    <span className="btn btn-sm btn-outline-danger mb-2" onClick={() => handleDelete(item.id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </span>
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