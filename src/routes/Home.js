import {useState,useEffect} from "react";
import Movie from "../components/Movie";

function Home(){
  const [loading, setLoading] =useState(true); //로딩화면 띄우기
  const [movies, setMovies] = useState([]);
  const getMovies =async() => {
    const json = await (await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )).json();
    setMovies(json.data.movies); //API에서 정보 가져오기
    setLoading(false); //로딩완료
  }
  useEffect(()=>{
    getMovies()
  },[]) //한번만 실행
  return(
    <main>
      {loading ? (<h1>Loading...</h1>) : (
        <section>
          {movies.map((movie) => (
            <Movie 
            key={movie.id}
            id={movie.id}
            mediumCoverImage={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.title} 
            genres={movie.genres} />
          ))}
        </section>)}
    </main>
  );
}

export default Home;
