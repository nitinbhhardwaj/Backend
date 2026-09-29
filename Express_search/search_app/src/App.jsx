import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const documents = [
    {
      name: "abc",
      file: "abc.docx"
    },
    {
      name: "Java Notes",
      file: "java.pdf"
    },
    {
      name: "React Notes",
      file: "react.pdf"
    },
    {
      name: "C++ Notes",
      file: "cpp.pdf"
    }
  ];

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Notes Portal App</h1>

      <input
        type="text"
        placeholder="Search notes here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredDocuments.map((doc) => (
          <div key={doc.file}>
            <h3>{doc.name}</h3>
            <p>{doc.file}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;