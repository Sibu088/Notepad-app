import React, { useState } from "react";

function Notepad() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSave = () => {
    if (note.trim()) setNotes([...notes, note]);
    setNote("");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📝 Quick Notes</h2>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your note here..."
        className="w-full h-32 p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        onClick={handleSave}
        className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-all font-medium"
      >
        Save Note
      </button>

      <ul className="mt-6 text-left space-y-3">
        {notes.map((n, i) => (
          <li
            key={i}
            className="bg-indigo-50 border-l-4 border-indigo-500 p-3 rounded-md shadow-sm"
          >
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notepad;
