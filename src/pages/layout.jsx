import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { About } from "./About"

export const Layout=()=>{
    return(
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <About></About>
        </>
    )
}