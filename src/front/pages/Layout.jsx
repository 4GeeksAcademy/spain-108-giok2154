import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar.jsx"
import { Footer } from "../components/Footer.jsx"
import { useEffect } from "react"
import { getContact } from "../Services/contactc.js"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"


// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const {dispatch} = useGlobalReducer()
    useEffect(() =>{ 
        const get = async ()=> {
            const data= await getContact() 
            dispatch({type: 'contacts', payload: data})
        }
        get()
    },[])

    return (
        <ScrollToTop>
            <Navbar />
                <Outlet />
            
            <Footer />
        </ScrollToTop>
    )
}