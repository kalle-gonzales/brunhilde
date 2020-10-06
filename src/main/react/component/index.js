import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import './i18n';
import i18n from "i18next";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userColor: "pink",
      movieName: "Between Tow Ferns",
      link: "https://www.imdb.com/title/tt9398640/?ref_=ttmi_tt",
      nextUser: "Test",
      picURL: "https://m.media-amazon.com/images/M/MV5BYzgyNzUyZjAtNDRiZS00MjQwLTgzMzQtZThhY2Y3YjFmYTc1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      date: "18.09.2020",
      alt: "Movie Poster for 'Between Two Ferns'"
    };
  }

  renderMovie(movieName, link, userColor, date, picURL, alt) {
    return (
      <div className={`userFrame {this.props.userColor} movie`} onClick={link} >
        <img src={picURL} alt={alt}/>
        <label>{movieName}</label>
        {date}
      </div>
    );
  }

  render() {
    return (
      <div className="canvas">
          <div className={`header {this.props.userColor}`}>
            {i18n.t("next")}{this.props.nextUser}
          </div>
        <div className="content">
          {this.renderMovie(this.state.movieName, this.state.link, this.state.userColor, this.state.date, this.state.picURL, this.alt)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
