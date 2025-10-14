import React from "react";

const data = [
  {
    title: "Avengers Endgame",
    imgURL: "https://m.media-amazon.com/images/I/51oBxmV-dML._AC_SY445_.jpg",
    description: "lorem 24 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "Avatar",
    imgURL: "https://m.media-amazon.com/images/I/51oBxmV-dML._AC_SY445_.jpg",
    description: "lorem 24 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "Titanic",
    imgURL: "https://m.media-amazon.com/images/I/51oBxmV-dML._AC_SY445_.jpg",
    description: "lorem 24 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  }
];

const Movie = ({ title, imgURL, description }) => {
  return (
    <div className="movie-card">
      <img src={imgURL} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

function App() {
  return (
    <>
      {data.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          imgURL={movie.imgURL}
          description={movie.description}
        />
      ))}
    </>
  );
}

export default App;
