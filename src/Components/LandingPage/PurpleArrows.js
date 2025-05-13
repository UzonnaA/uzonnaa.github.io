import "./PurpleArrows.css";
import { NavHashLink } from "react-router-hash-link";

function PurpleArrows() {
  return (
    <NavHashLink
      className="purpleArrows"
      to="/#about"
      scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
    >
      <img
        className="purpleArrows"
        src="/images/bottom_red_arrows.svg"
        alt="bottom puruple arrows"
      />
    </NavHashLink>
  );
}

export default PurpleArrows;
