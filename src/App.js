import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App flex flex-wrap-reverse md:h-screen">
      <Sidebar />
      {/* Main Section */}
      <Main />
    </div>
  );
}

export default App;
