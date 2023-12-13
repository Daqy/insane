import Router from "./router";
import Navbar from "./components/navbar/nav";

function App() {
  return <Router defaultLayout={<Navbar />} />;
}

export default App;
