import styles from "./links.module.css";

const Links = ({ children, link }) => {
  return (
    <li>
      <a href={link}>{children}</a>
    </li>
  );
};

export default Links;
