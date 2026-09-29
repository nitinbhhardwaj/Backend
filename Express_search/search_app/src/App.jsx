import { useState } from "react";
import "./index.css";

const App = () => {
  const [search, setSearch] = useState("");

  const documents = [
    {
      name: "ABC Notes",
      file: "abc.docx",
      type: "DOCX"
    },
    {
      name: "Java Notes",
      file: "java.pdf",
      type: "PDF"
    },
    {
      name: "React Notes",
      file: "react.pdf",
      type: "PDF"
    },
    {
      name: "C++ Notes",
      file: "cpp.pdf",
      type: "PDF"
    }
  ];

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          Notes<span>Portal</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#notes">Notes</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="tag">STUDY • ORGANIZE • LEARN</p>

          <h1>
            Your notes,
            <br />
            <span>all in one place.</span>
          </h1>

          <p className="subtitle">
            Quickly find and access your study materials whenever you need them.
          </p>

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>

        <section className="notes-section" id="notes">
          <div className="section-heading">
            <div>
              <p className="small-title">YOUR LIBRARY</p>
              <h2>Available Notes</h2>
            </div>

            <span className="count">
              {filteredDocuments.length} notes
            </span>
          </div>

          <div className="notes-grid">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => {
                const fileUrl = `http://localhost:5000/files/${doc.file}`;
                const downloadUrl = `http://localhost:5000/download/${doc.file}`;

                return (
                  <div className="note-card" key={doc.file}>
                    <div className="file-icon">
                      {doc.type}
                    </div>

                    <div className="note-info">
                      <h3>{doc.name}</h3>
                      <p>{doc.file}</p>
                    </div>

                    <div className="actions">
                      <a
                        className="open-btn"
                        href={fileUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open →
                      </a>

                      <a
                        className="download-btn"
                        href={downloadUrl}
                      >
                        Download ↓
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="no-results">
                <h3>No notes found</h3>
                <p>Try searching with a different keyword.</p>
              </div>
            )}
          </div>
        </section>

        <section className="about" id="about">
          <p className="small-title">ABOUT</p>

          <h2>A simple place for your study material.</h2>

          <p>
            Notes Portal helps you search and access your academic notes
            without having to look through multiple folders.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 Notes Portal</p>
      </footer>
    </div>
  );
};

export default App;