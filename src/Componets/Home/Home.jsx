import React, { useEffect, useState } from "react";
import Loading from "../Loding/Loding";
import axios from "axios";
import MoveCard from "../MoveCard/MoveCard";
import "./Home.css";

export default function Home() {
  const [trinding, settrinding] = useState(null);

  async function gettrinding() {
    const data = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=ac7e5c509c05c95a09ccc13bb434f9f4`
    );

    console.log(data.data.results);
    settrinding(data.data.results);
  }
  useEffect(() => {
    gettrinding();
  }, []);

  return (
    <>
      {trinding !== null ? (
        <section className="home-section">
          <div className="home-container  container">
            <div className="movies-grid">
                  { trinding.map((move)=> <MoveCard    moviedetils={move} key={move.id}   /> ) } 
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
//*https://api.themoviedb.org/3/trending/movie/week?api_key=ac7e5c509c05c95a09ccc13bb434f9f4
