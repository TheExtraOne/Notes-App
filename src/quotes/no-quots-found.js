import { Link } from "react-router-dom";
import classes from "./no-quots-found.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link className="btn" to="/new-quote">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
