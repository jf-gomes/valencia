import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import AuthProvider from "./contexts/auth";

export default function App(){
    return(
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/valencia/" element={<Home />}></Route>
                    <Route path="/valencia/cart" element={<Cart />}></Route>
                </Routes>
            </Router>
        </AuthProvider>
    )
}