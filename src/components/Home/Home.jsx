import { Outlet, useLocation, useNavigation } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import User from "../User/User"

const Home = () => {
    const navigation = useNavigation()
    const location = useLocation()
    console.log(location);
    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-8">Welcome to my website, this is home</h1>
            <Header></Header>
            {navigation.state === "loading" ? <p className="text-3xl text-center">loading...</p> : 
            <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    )
}

export default Home