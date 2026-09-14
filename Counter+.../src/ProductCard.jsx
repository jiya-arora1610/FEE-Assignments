import "./ProductCard.css";


function ProductCard(props){
    return(
        <>
        <div style = {{border:"2px solid black"}}>
            <img src={props.product.image} alt={props.product.name} />
            <p>{props.product.desc}</p>
            <p>Price: {props.product.price}</p>
            <p className={props.product.stock > 0 ? "stock" : "notinstock"}> Available: {props.product.stock > 0 ? 'Yes' : 'No'}</p>
            <button>Add to Cart</button>
            <button>Buy Now</button>
        </div>
        </>

    )
}

export default ProductCard;

