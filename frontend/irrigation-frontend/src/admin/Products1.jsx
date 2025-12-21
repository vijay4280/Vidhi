import { useEffect, useState } from "react";
import API from "../api/axios";

const Products1 = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: ""
  });

  const fetchProducts = async () => {
    const { data } = await API.get("/products");
    setProducts(data);
  };

  const addProduct = async () => {
    await API.post("/products", form);
    setForm({ name: "", price: "", category: "" });
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await API.delete(`/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>

      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Category ID" onChange={(e) => setForm({ ...form, category: e.target.value })} />

      <button onClick={addProduct}>Add Product</button>

      <ul>
        {products.map((p) => (
          <li key={p._id}>
            {p.name} - ₹{p.price}
            <button onClick={() => deleteProduct(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products1;
