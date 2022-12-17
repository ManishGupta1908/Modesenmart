import Navbar from "./Components/Navbar"
import AllRoutes from "./Components/AllRoutes"
import AuthContextProvider from "./Context/AuthContext";
import LoginModel from "./PopUp/LoginModel";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <LoginModel/>
    </div>
  );
}

export default App;
