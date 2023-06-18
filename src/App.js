import "./App.css";
import AppAlert from "./components/AppAlert";
import AppFooter from "./components/AppFooter";
import AppGraph from "./components/AppGraph";
import AppHeader from "./components/AppHeader";
import AppMenu from "./components/AppMenu";
import AppShelf from "./components/AppShelf";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="flex">
        <AppMenu />
        <div className="grid grid-cols-12 grid-rows-12 gap-2 grow">
          <AppAlert/>
          <AppShelf/>
          <AppGraph/>
        </div>
      </div>
    </div>
  );
}

export default App;
