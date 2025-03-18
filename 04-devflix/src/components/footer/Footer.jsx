import "./Footer.css";

const Footer = (props) => {
  return (
    <footer>
      <p>
        feito com ❤️por
        <a href={props.devLinks}>{props.devName}</a>
      </p>
    </footer>
  );
};

export default Footer;
