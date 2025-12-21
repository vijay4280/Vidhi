import { useEffect, useState } from "react";
import API from "../api/axios";

const Categories = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const { data } = await API.get("/categories");
    setCategories(data);
  };

  const addCategory = async () => {
    await API.post("/categories", { name });
    setName("");
    fetchCategories();
  };

  const deleteCategory = async (id) => {
    await API.delete(`/categories/${id}`);
    fetchCategories();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Categories</h2>

      <input
        placeholder="Category name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addCategory}>Add</button>

      <ul>
        {categories.map((c) => (
          <li key={c._id}>
            {c.name}
            <button onClick={() => deleteCategory(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
