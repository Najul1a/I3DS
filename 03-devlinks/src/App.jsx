import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";

import "./App.css";

const App = () => {
  return (
    <div id="App" className="dark">
      <Perfil />
      <Switch />
      <ul>
        <Links />
        <Links />
        <Links />
        <Links />
      </ul>

      <div id="socialLinks">
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
      </div>
      <div>
        <Rodape />
      </div>
    </div>
  );
};

export default App;
