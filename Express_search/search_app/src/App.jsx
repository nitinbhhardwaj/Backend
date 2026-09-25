import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const documents = [
    {
      name: "abc",
      file: "abc.docx"
    }
  ];

  return (
    <div>
      <h1>Notes Portal App</h1>

      <input
        type="text"
        placeholder="search notes here"
        onClick={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default App;