import { Link, useSearchParams } from "react-router-dom";
import { products } from "./productsData";

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category") || "all";

    const filtered = category === "all"
        ? products
        : products.filter(p => p.category === category);

    return (
        <div>
            <h1>Каталог</h1>

            <div className="filters">
                <button onClick={() => setSearchParams({})}>Усі</button>
                <button onClick={() => setSearchParams({ category: "phones" })}>Телефони</button>
                <button onClick={() => setSearchParams({ category: "laptops" })}>Ноутбуки</button>
            </div>

            <div className="list">
                {filtered.map(p => (
                    <div className="item" key={p.id}>
                        <Link to={`/products/${p.id}`}>{p.name}</Link>
                        <p>Ціна: {p.price} $</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;