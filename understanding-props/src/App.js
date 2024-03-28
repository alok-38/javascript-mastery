import './App.css';
import Tweet from './components/Tweet';
import CreateTweet from './components/CreateTweet';

function App() {
  const name = "Alok";
  const message = "I will sleep now..."
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React!</h1>
        <CreateTweet />
        <Tweet name={name} message={message} />
      </header>
    </div>
  );
}

export default App;
