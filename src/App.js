
import './App.css';
import Row from "./Row";
import Banner from "./Banner";
import requests from './requests';

function App() {
  return (
    <div className="App">
      {/* {Nav} */}
      <Banner  />
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchActionMovies} isLargeRow/>

      <Row title="Traending Movies"  fetchURL={requests.fetchTrendingMovies}/>
      <Row title="Top Rated"  fetchURL={requests.fetchTopRated}/> 
      <Row title="Comedy Movie"  fetchURL={requests.fetchComedyMovies}/>
      <Row title="Action Movies"  fetchURL={requests.fetchActionMovies}/> 
      <Row title="Romance Movies"  fetchURL={requests.fetchRomanceMovies} />
       
             

    </div>
  );
}

export default App;
