
import './App.css';
import Profile  from './Profile/Profile';
import img from "./hm.jpg"
function App() {
  return (
    <div className="App">
  <Profile name = "hamida"  bio = "test" profession ="ingenieur informatique"> <img style= {{width:"150px", height:"150px" }} src={img} alt='pic'/> </Profile>
    </div>
  );
}

export default App;
