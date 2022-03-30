// styles and ui
import styles from './App.module.css';
// components
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

function App() {
  return (
    <div>
      <Header />
      <main>
        <List />
        <Map />
      </main>
    </div>
  );
}

export default App;
