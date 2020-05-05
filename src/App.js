import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


const movies = [
  {
  
    title: "Matrix",
    poster: "https://lh3.googleusercontent.com/proxy/LAb9WJ0QBd5QPwN-4jFZ5jlqQd4bjXXWdM-c-1KABJV9x-CNotWnSpy6wiOM8gG_5dejXDEqYCNLJd3iQ8CaAuxNqtgY-XdcwIRPzBD4sfo"
  },
  {
    title:"Full Metal Jacket",
    poster:"https://i.ytimg.com/vi/sCnKqwoXx90/maxresdefault.jpg"
  },
  {
    title: "Oldboy",
    poster:"https://t1.daumcdn.net/cfile/tistory/9973963F5B992E321F"
  },
  {
    title: "Star Wars",
    poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/220px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
     
  }
]

class App extends Component {
  render() {
  return (
    <div className="App">
      {movies.map((movie, index) => {

       return <Movie title={movie.title} poster={movie.poster} key={index} />
      })}
    </div>
  );
}
}
export default App;
