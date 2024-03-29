import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Rent from "./components/Pages/Rent/Rent";
import Buy from "./components/Pages/Buy/Buy";
import Search from "./components/Pages/Search/Search";
import Property from "./components/Pages/Property/Property";
import About from "./components/Pages/About/About";
import Upload from "./components/Pages/Uplod/Upload";
import Team from "./components/Pages/Team/Team";
import Contact from "./components/Pages/Contact/Contact";
import Donate from "./components/Pages/Donate/Donate.jsx";
import Faq from "./components/Pages/Faq/Faq.jsx";

const client = new ApolloClient({
  uri: "https://real-estate012.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route
            path="*"
            element={
              <main>
                <Navbar />
                <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                  404 NOT FOUND
                </h1>
              </main>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="rent" element={<Rent />} />
          <Route path="buy" element={<Buy />} />
          <Route path="search" element={<Search />} />
          <Route path="property">
            <Route path=":propertyId" element={<Property />} />
          </Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/Uplod" element={<Upload />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        
      </div>
    </ApolloProvider>
  );
}

export default App;
