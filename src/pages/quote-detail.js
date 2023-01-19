import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import Comments from "../comments/comments";
import HighlightedQuote from "../quotes/hight-lighted-quote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import Loading from "../UI/loading";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { qouteID } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(qouteID);
  }, [sendRequest, qouteID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
export default QuoteDetail;
