// Import necessary components and functions from react-router-dom.

import { createBrowserRouter, createRoutesFromElements, Route, } from "react-router-dom";
import { Layout } from "./pages/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { Planets } from "./pages/Planets.jsx";
import { Contacts } from "./pages/Contacts.jsx";
import { Starships } from "./pages/Starships.jsx";
import { Character } from "./pages/Character.jsx";
import { FormContact } from "./components/FormContact.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/starships" element={<Starships />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/character" element={< Character />} />
      <Route path="/form-contact" element={<FormContact/>} />
      <Route path="/planets" element={<Planets/>}/>
    </Route>
  )
);