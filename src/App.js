import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://Aderoju-Johnson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aderoju Johnson
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/dheroju/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://fanciful-monstera-2cece7.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
