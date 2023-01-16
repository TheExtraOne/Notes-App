import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/all-quotes";
import NewQuote from "./pages/new-quote";
import QuoteDetail from "./pages/quote-detail";
import Layout from "./layout/layout";

function App() {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:qouteID">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Layout>
    </Switch>
  );
}

export default App;
