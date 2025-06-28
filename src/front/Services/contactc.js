export const createAgenda = async () => {
  const user = "giovanny";
  try {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      console.log("Agenda creada correctamente");
      getContact();
      return true;
    } else {
      console.log("No se pudo crear la agenda");
      return false;
    }
  } catch (error) {
    console.error("Error al crear la agenda:", error);
    return false;
  }
};

export const getContact = async () => {
  const user = "giovanny";
  try {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}/contacts`);
    if (response.status === 404) {
      // Aquí podrías llamar a createAgenda si quieres crearla automáticamente
      createAgenda();
    }
    const data = await response.json();
    console.log("Contactos obtenidos:", data.contacts);
    return data.contacts;
  } catch (error) {
    console.error("Error al obtener contactos:", error);
    return false;
  }
};

export const addContact = async (data) => {
  try {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/giovanny/contacts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error del servidor:", errorData);
      throw new Error("Error al agregar el contacto");
    }
   // getContact()
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async (id) => {
    try {
        // Usamos el id para eliminar el contacto específico
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/giovanny/contacts/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Error al eliminar contacto");
        }

        return true;
    } catch (error) {
        console.error("Error eliminando contacto:", error);
        return false;
    }
};

// funcion updateContact actualiza contacto existente

export const updateContact = async (id, data) => {
  try {
    // Llamada a la API usando el método PUT para actualizar 
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/giovanny/contacts/${id}`, {
      method: "PUT", // PUT se usa para editar 
      headers: {
        'Content-Type': 'application/json', // Indicamos que los datos son JSON
      },
      body: JSON.stringify(data) // Convertimos el objeto con los datos en un string JSON
    });

    // Si la respuesta de la API no es exitosa 
    
     if (response.status === 404) {
      alert("Contacto no encontrado para actualizar");
      return false;
    }
    if (!response.ok) {
      const errorData = await response.json(); // Obtenemos los detalles del error
      console.error("Error al editar el contacto:", errorData);
      throw new Error("Error al editar el contacto");
    }

    // Si todo fue bien, retornamos true para indicar éxito
    return true;
  } catch (error) {
    // Si hubo un error en el proceso, lo mostramos en consola y devolvemos false
    console.error("Error editando contacto:", error);
    return false;
  }
};