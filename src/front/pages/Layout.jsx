import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar1 } from "../components/Navbar1"
import { Footer } from "../components/Footer"
import Cards from "../components/cards"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar1 />
                <Outlet />
            
            <Footer />
        </ScrollToTop>
    )
}