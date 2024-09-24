import './App.css';
import Sidebar from './components/Sidebar';
import Stories from './components/Stories';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Stories />
        <Feed />
      </div>
    </div>
  );
}

export default App;
