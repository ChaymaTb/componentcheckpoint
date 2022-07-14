
import './App.css';
import Profilephoto from './profile/Profilephoto'
import Fullname from './profile/Fullname'
import Adress from './profile/Adress'
import './profile/Profile.css'

function App() {
  return (
    <div className='App'>
      <Profilephoto />
      <div className="cont">
        <Fullname />
        <Adress />
      </div>
    </div>
  );
}

export default App;
