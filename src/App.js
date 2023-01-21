import { Route, Routes, Navigate, Link } from "react-router-dom";
import AllQuotes from "./pages/all-quotes";
import NewQuote from "./pages/new-quote";
import QuoteDetail from "./pages/quote-detail";
import NotFound from "./pages/not-found";
import Layout from "./layout/layout";
import Comments from "./comments/comments";

//in react router 5 I used <Switch></Switch>, but when I tried to upgrade to 6 version, have to replace with <Routes></Routes>
// Insted of <Redirect></Redirect>, we have to use <Navigate></Navigate>

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:qouteID" element={<QuoteDetail />}>
          <Route
            path=""
            element={
              <div className="centered">
                <Link className="btn--flat" to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
