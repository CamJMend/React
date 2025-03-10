// src/pages/WordList.js
import React, { useEffect, useState } from "react";

function WordList() {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState("");
  const [warning, setWarning] = useState("");
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    if (showList) {
      setWords(["hello", "react", "hooks"]);
    }

    return () => {
      setWords([]);
    };
  }, [showList]);

  const addWord = () => {
    if (words.includes(newWord)) {
      setWarning("⚠️ La palabra ya existe");
    } else {
      setWords([...words, newWord]);
      setWarning("");
    }
    setNewWord("");
  };

  return (
    <div>
      <h2>Lista de Palabras</h2>
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Ocultar" : "Mostrar"} Lista
      </button>
      {showList && (
        <>
          <ul>
            {words.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
          <input
            type="text"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
          />
          <button onClick={addWord}>Agregar</button>
          {warning && <p style={{ color: "red" }}>{warning}</p>}
        </>
      )}
    </div>
  );
}

export default WordList;
