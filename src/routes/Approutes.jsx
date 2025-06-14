import { Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Solutions from "../pages/Solution"
const Approutes = () => {
    return (
        <Routes>

            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/software-solution" element={<Solutions />} />
            </Route>

        </Routes>
    )
}

export default Approutes