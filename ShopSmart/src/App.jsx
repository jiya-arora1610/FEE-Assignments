
import { useState, useEffect } from "react";
import "./App.css";

function App() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 12;
    const [sortBy, setSortBy] = useState("");
    const [category, setCategory] = useState([]);

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

    useEffect(() => {
        fetch("https://dummyjson.com/products/category-list")
            .then(res => res.json())
            .then(data => {
                setCategory(data);
            })
            .catch(err => console.log(err));
        }, []); 

    function sortProducts(value){
        fetch(`https://dummyjson.com/products?sortBy=${value}&order=asc`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProducts(data.products);
        })
        .catch(err => console.log(err));
    }

    function filterProducts(category) {
    fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data.products);
        })
        .catch(err => console.log(err));
}   

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
              {/* <button>Filter</button> */}

              <select onChange={(e) => filterProducts(e.target.value)}>
                <option value="">Categories</option>
                <option value=""></option>
                {category.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
              </select>

              <select onChange={(e) => sortProducts(e.target.value)}>
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


