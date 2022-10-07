import Flashcards from "./components/Flashcards/Flashcards";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";






function App() {
  return (
    <div className="container">
       <Header />
      <div className="row mt-5">
      <div className="col-sm-12 col-md-10 col-lg-8" style={{margin: 'auto'}}>
        <Form />
        </div>
        </div>
        <div className="row mt-5">
        <div className="col-sm-12">
        <Flashcards />
        </div>

      </div>
    </div>
  );
}

export default App;
