import { AiFillHeart } from "react-icons/ai";
// styles
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-muted">© 2022 MovieApp, all rights reserved.</p>
        <p className="created">
          Created with
          <span>
            <AiFillHeart className="heart" />
          </span>
          by Nelsen Septa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
