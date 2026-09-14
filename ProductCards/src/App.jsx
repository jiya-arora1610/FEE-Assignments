// 


import ProductCard from "./components/ProductCard";
import "./index.css";

function App() {
  const products = [
    {
      id: 1,
      name: "MacBook Neo",
      description: "Powerful laptop for work and study.",
      price: "80,000",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-neo-color-unselect-202603-gallery-1_FMT_WHH?wid=690&hei=720&fmt=jpeg&qlt=90&.v=1771350451299",
    },

    {
      id: 2,
      name: "iPhone",
      description: "A powerful smartphone with a stunning display.",
      price: "70,000",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",
    },

    {
      id: 3,
      name: "Wireless Headphones",
      description: "Enjoy immersive sound with wireless freedom.",
      price: "12,000",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },

    {
      id: 4,
      name: "Smart Watch",
      description: "Track your fitness and stay connected.",
      price: "15,000",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    },

    {
      id: 5,
      name: "Digital Camera",
      description: "Capture beautiful moments in high quality.",
      price: "55,000",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    },

    {
      id: 6,
      name: "Gaming Laptop",
      description: "High-performance laptop for gaming and development.",
      price: "95,000",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600",
    },
  ];

  return (
    <div className="container">
      <h1>Our Products</h1>

      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;