import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../../public/recipes.json';
import CommentSection from '../components/CommentSection';

function DetailPage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id.toString() === id);

  if (!recipe) return <div>Resep tidak ditemukan.</div>;

  return (
    <div className="p-4 bg-pink-50 min-h-screen">
      <h1 className="text-2xl font-bold text-pink-700">{recipe.title}</h1>
      <p className="text-pink-600 mb-2">Kategori: {recipe.category}</p>
      <ul className="list-disc pl-5">
        {recipe.ingredients.map((i, idx) => (
          <li key={idx}>{i.name} - Rp{i.price}</li>
        ))}
      </ul>
      <h3 className="mt-4 font-semibold">Langkah-langkah:</h3>
      <ol className="list-decimal pl-5">
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <CommentSection />
    </div>
  );
}

export default DetailPage;
