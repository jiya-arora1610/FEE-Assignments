
import { useState, useEffect } from "react";
import "./App.css";

function App() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 10;

    useEffect(() => {

        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(currentPage - 1) * limit}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data.products);
                setTotal(data.total);
            })
            .catch(err => console.log(err));

    }, [currentPage]);

    return (
        <div>
          <header>
            <h1>ShopSmart</h1>
            <h2>Our Products</h2>
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button onClick={() => setCurrentPage(currentPage-1)} disabled={currentPage === 1}>Back</button>
              <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= Math.ceil(total / limit)}>Next</button>
              <button>Filter</button>

              <select>
                  <option value="">Sort By</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
              </select> 
            </div>


            <p>Total Products: {total}</p>
            <p>Page: {currentPage} / {Math.ceil(total / limit)}</p>
          </header>
            

            <div className="grid">
            {products.map(product => (
                <div key={product.id} className="card">
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <img src={product.thumbnail} width="150" />
                </div>
            ))}
            </div>
        </div>
    );
}

export default App;


