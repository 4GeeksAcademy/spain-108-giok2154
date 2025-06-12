export const createAgenda = async () => {
    const user = "giovanny";
    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}`, {
            method: "POST",
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
    const response = await fetch("https://tu-api.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al agregar el contacto");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};




