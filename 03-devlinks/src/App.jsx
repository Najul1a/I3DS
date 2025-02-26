import "./App.css";
import foto from "./img/perfil1.jpeg";
import foto2 from "./img/perfil2.jpeg";
import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(false);
  const troca = () => {
    setIsLight((anterior) => !anterior);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Perfil fotoPerfil={isLight ? foto : foto2}>@Najul1a </Perfil>
      <Switch troca={troca} isLight={isLight} />
      <div id="container">
        <ul>
          <Links link={"https://github.com/Najul1a"}>GitHub</Links>
          <Links link={"https://instragram.com/anna_ofz_"}>Instragram</Links>
          <Links link={"https://br.linkedin.com/"}>Linkdln</Links>
          <Links link={"https://www.youtubekids.com/"}>Youtube</Links>
        </ul>
      </div>
      <div id="socialLinks">
        <SocialLinks link={"https://github.com/Najul1a"} icon={"logo-github"} />
        <SocialLinks
          link={"https://instragram.com/anna_ofz_"}
          icon={"logo-instagram"}
        />
        <SocialLinks link={"https://br.linkedin.com/"} icon={"logo-linkedin"} />
        <SocialLinks
          link={"https://www.youtubekids.com/"}
          icon={"logo-youtube"}
        />
      </div>
      <div>
        <Rodape>Najul1a</Rodape>
      </div>
    </div>
  );
};

export default App;
