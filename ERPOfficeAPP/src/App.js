import { Space } from "antd";
import "./App.css";
import AppHeader from "./Components/AppHeader/index.tsx";
import SideMenu from "./Components/SideMenu/index";
import PageContent from "./Components/PageContent/index";

function App() {


  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu/>
        <PageContent/>
      </div>
    </div>
  );
}
export default App;
