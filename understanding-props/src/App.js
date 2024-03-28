import './App.css';
import Tweet from './components/Tweet';
import CreateTweet from './components/CreateTweet';

function App() {
  const name = "Alok";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React!</h1>
        <CreateTweet />
        <Tweet author="Brad Traversy" />
      </header>
    </div>
  );
}

export default App;
