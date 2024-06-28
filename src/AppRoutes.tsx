import { Navigate, Route} from "react-router-dom"
import { Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import Homepage from "./pages/Homepage.tsx"
import AuthCallbackPage from "@/pages/AuthCallbackPage.tsx";
import UserProfilePage from "@/pages/UserProfilePage.tsx";
import ProctectedRoute from "@/auth/ProctectedRoute.tsx";

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Layout showHero><Homepage/></Layout>}></Route>
            <Route path = "/auth-callback" element = {<AuthCallbackPage/>}/>
            <Route element={<ProctectedRoute/>}>

                <Route path="/user-profile"
                       element={<UserProfilePage/>}
                />


            </Route>
            <Route path="*" element={<Navigate to = "/"/> }></Route>

        </Routes>
    )
}

export default AppRoutes;