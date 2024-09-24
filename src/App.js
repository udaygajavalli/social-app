import './App.css';
import Sidebar from './components/Sidebar';
import Stories from './components/Stories';
import Feed from './components/Feed';
import { CiSearch } from 'react-icons/ci';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="search">
          <CiSearch />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          ></input>
        </div>

        <Stories />
        <Feed />
      </div>
    </div>
  );
}

export default App;
