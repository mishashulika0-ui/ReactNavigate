import { useParams, useNavigate } from "react-router-dom";
import { products } from "./productsData";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div>
                <h1>Товар не знайдено</h1>
                <button onClick={() => navigate(-1)}>Назад</button>
            </div>
        );
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Категорія: {product.category}</p>
            <p>Ціна: {product.price} $</p>
            <p>Опис: {product.description}</p>
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
};

export default ProductDetails;