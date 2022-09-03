import "minireset.css";
import "./App.css";

function App({ name, course, date }) {
  return (
    <div className="App">

      <div className="content">
        <h1>{name}</h1>
        <h2><span className="forc">For Completing</span>{course}</h2>
      </div>

      {date && (
        <p className="date">
          Issued on <span className="bold">{date}</span>
        </p>
      )}
    </div>
  );
}

App.defaultProps = {
  name: "James Lee",
  course: "Creating PDFs with React & Make.cm",
  date: "March 15 2021",
};



export default App;
