import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Home = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Welcome to my website, this is home</h1>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Home