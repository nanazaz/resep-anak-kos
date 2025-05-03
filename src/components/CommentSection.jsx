import React, { useState } from 'react';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.content) {
      setComments([...comments, form]);
      setForm({ name: '', content: '' });
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-pink-700">Komentar</h3>
      <form onSubmit={handleSubmit} className="mb-2">
        <input
          className="border rounded px-2 py-1 mr-2"
          placeholder="Nama"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border rounded px-2 py-1 mr-2"
          placeholder="Komentar"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button className="bg-pink-500 text-white px-3 py-1 rounded">Kirim</button>
      </form>
      <ul className="space-y-1">
        {comments.map((c, i) => (
          <li key={i} className="bg-pink-100 p-2 rounded shadow">
            <strong>{c.name}:</strong> {c.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;
