import './App.css';
import Class from './components/Class';
import ClassBook from './components/ClassBook';
import Book from './pages/Book';
import City from './pages/City';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <City />
        <Class/>
        <Book/>
        <ClassBook/>
        
        
        
      </header>
    </div>
  );
}

export default App;
