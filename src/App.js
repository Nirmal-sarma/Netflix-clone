import "./App.css";
import Row from "./Row";
import Request from "./Request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
        <Nav/>
       <Banner/>
      <Row title="NETFLIX_ORIGINAL" fetchUrl={Request.fetchNetFlixOriginals} isLargeRow  />
      <Row title="Trending Now" fetchUrl={Request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Request.fetchTopRated} />
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Documentary" fetchUrl={Request.fetchDocumentaries} />

    </div>
  );
}

export default App;
