import { useParams, Outlet } from "react-router-dom";
import { useEffect } from "react";
import HighlightedQuote from "../quotes/hight-lighted-quote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import Loading from "../UI/loading";

const QuoteDetail = () => {
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
      <Outlet />
    </>
  );
};
export default QuoteDetail;
