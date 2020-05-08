import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';




class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()

  // Update componentWillReceiveProps() -> shouldComponentUpdate() ->
  // componentWillUpdate() ==true일떄 -> render() -> componentUpdate()

  state = {

  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        movies: [
          {
          
            title: "Matrixa",
            poster: "https://t1.daumcdn.net/cfile/tistory/99D10C365D10519023"
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
             
          },
          {
            title:"Trainspotting",
            poster:"https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F204B7D4A4E99A1FA2C7809"
          }
        ]
      })
    }, 1000)
  }

  _renderMovies = () => {
    // const movies = [<Movie />, <Movie props />]
    const movies =  this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
     })
     return movies
  }

  render() {
  return (
    <div className="App">
      {this.state.movies ? this._renderMovies() : 'Loading'}
    </div>
  );
}
}
export default App;
