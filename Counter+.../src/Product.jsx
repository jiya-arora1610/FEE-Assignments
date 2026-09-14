import ProductCard from "./ProductCard";
import "./ProductCard.css";

function Product(){
    const products = [
        {
            pid:"101",
            name: "iphone 17",
            category: "mobile",
            desc:"apple",
            stock:0,
            price:"80,000",
            image: ""
        },

        {
            pid:"102",
            name: "iphone 17",
            category: "mobile",
            desc:"apple",
            stock:45,
            price:"80,000",
            image: ""
        },

        {
            pid:"103",
            name: "iphone 17",
            category: "mobile",
            desc:"apple",
            stock:0,
            price:"80,000",
            image: ""
        },

        {
            pid:"104",
            name: "iphone 17",
            category: "mobile",
            desc:"apple",
            stock:45,
            price:"80,000",
            image: ""
        },

        {
            pid:"105",
            name: "iphone 17",
            category: "mobile",
            desc:"apple",
            stock:45,
            price:"80,000",
            image: ""
        },

        {
            pid:"106",
            name: "iphone 17",
            category: "mobile",
            desc:"apple",
            stock:45,
            price:"80,000",
            image: ""
        },
    ]

    return(
        <>
        <h1>Products</h1>
        {products.map(product => (
            <ProductCard key={product.pid} product={product} />
        ))}
        </>
    )
}
//filter function on object/array

export default Product;