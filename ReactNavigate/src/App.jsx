import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/:id" element={<ProductDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;