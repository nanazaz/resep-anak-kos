import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then(res => res.json())
      .then(setRecipes);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 p-4 font-sans">
      <h1 className="text-2xl font-bold text-pink-700 mb-4">Resep Anak Kos</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <motion.div
            key={recipe.id}
            className="bg-white rounded-xl shadow p-4"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-lg font-semibold text-pink-800">{recipe.title}</h2>
            <p className="text-sm text-pink-600 mb-2">Kategori: {recipe.category}</p>
            <ul className="text-sm list-disc pl-4">
              <Link to={`/resep/${recipe.id}`} className='text-pink-600 underline text-sm block mb-2'>Lihat Detail</Link>
            {recipe.ingredients.map((i, idx) => (
                <li key={idx}>{i.name} - Rp{i.price}</li>
              ))}
            </ul>
            <p className="text-yellow-500 mt-2">⭐️ {recipe.rating}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
