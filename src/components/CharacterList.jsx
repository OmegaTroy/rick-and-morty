import { useState, useEffect } from "react";
import Character from "./Character";
import '../css/container.css'

const Navigation=(props)=>{
    return(
        <header className="header">
            {
                props.prev ? (<button className="header__btn" onClick={()=> props.setPage(props.page - 1)}>Prev</button>):(<button className="header__btn-dis">Prev</button>)
            }
            <h2 className="page">page {props.page}</h2>
            {
                props.next ? (<button className="header__btn-right" onClick={()=> props.setPage(props.page + 1)}> Next </button>):(
                  <button className="header__btn-right" onClick={()=> props.setPage(props.page == 1)}> Next </button>
                )
            }
        </header>
        )
}

function CharacterList() {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [prev ,setPrev] = useState();
  const [next ,setNext] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const url = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await url.json();
      setPrev(data.info.prev);
      setNext(data.info.next);
      setLoading(false);
      setCharacter(data.results);
    };
    fetchData();
  }, [page]);
  return (
    <div className="">
        <Navigation page={page} next={next} prev={prev} setPage={setPage}/>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          {characters.map((character) => {
            return (
                <Character key={character.id} character={character} />
            );
          })}
        </div>
      )}
      <Navigation page={page} next={next} prev={prev} setPage={setPage}/>
    </div>
  );
}

export default CharacterList;
