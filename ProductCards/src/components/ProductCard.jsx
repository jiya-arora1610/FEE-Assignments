import "./ProductCard.css";

function ProductCard({ image, name, description, price }) {
  return (
    <>
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>₹{price}</h3>
      <button>Buy Now</button>
    </div>
    </>
  );
}

export default ProductCard;
