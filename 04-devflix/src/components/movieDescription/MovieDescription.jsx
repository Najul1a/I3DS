import React, { useEffect, useState } from "react";
import styles from "./MovieDescription.module.css";
const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState([]);
  useEffect(() => {
    fetch(`${props.apiUrl}&i=${props.movieID}`)
      .then((response) => response.json())
      .then((data) => setMovieDesc(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(movieDesc);
  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movieDesc.Poster} alt="" />
          <button className={styles.btnClose} onClick={props.click}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
