import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import './i18n';
import i18n from "i18next";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userColor: "#EF0AD8",
      movieName: "Between Tow Ferns",
      link: "https://www.imdb.com/title/tt9398640/?ref_=ttmi_tt",
      nextUser: "Test",
      picURL: "https://m.media-amazon.com/images/M/MV5BYzgyNzUyZjAtNDRiZS00MjQwLTgzMzQtZThhY2Y3YjFmYTc1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      date: "18.09.2020",
      alt: "Movie Poster for 'Between Two Ferns'"
    };
  }

  renderMovie(movieName, link, userColor, date, picURL, alt) {
    console.log(movieName, link, userColor, date, picURL, alt)
    return (
      <div className={`userFrame movie`} onClick={showInfo(link)} style={{boxShadow: `0 -1px 6px 4px ${userColor}`}}>
        <img className="poster" src={picURL} alt={alt}/>
        {/* <label>{movieName}</label> */}
        {/* {date} */}
      </div>
    );
  }

  render() {
    return (
      <div className="canvas">
          {/* <div className={`header`} style={{boxShadow: `0 4px 2px 0px ${this.state.userColor}`}}> */}
          <div className="headerContainer">
            <div className={`header`} style={{boxShadow: `0 4px 2px -1px white`}}>
              {i18n.t("next")}{this.state.nextUser}
            </div>
          </div>
        <div className="content">
          {this.renderMovie(
            this.state.movieName, this.state.link, this.state.userColor, this.state.date, this.state.picURL, this.alt
          )}
          {this.renderMovie(
            `2001: A Space Odysee`,
            `https://www.imdb.com/title/tt0062622/?ref_=nv_sr_srsg_0`,
            `#00f`,
            `02.04.1337`,
            `https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg`,
            `Movie Poster for '2001: A Space Odysee'`
          )}
          {this.renderMovie(
            `Clockwork Orange`,
            `https://www.imdb.com/title/tt0066921/?ref_=hm_tpks_tt_4_pd_tp1`,
            `#0f0`,
            `19.10.1337`,
            `https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg`,
            `Movie Poster for 'Clockwork Orange'`
          )}
          {this.renderMovie(
            `Hook`, // title
            `https://www.imdb.com/title/tt0102057/?ref_=fn_al_tt_1`, // link
            `#f00`, // color
            `01.01.2001`, // date
            `https://m.media-amazon.com/images/M/MV5BNmJjNTQzMjctMmE2NS00ZmYxLWE1NjYtYmRmNjNiMzljOTc3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg`, // poster
            `Movie Poster for 'Hook'` // alt
          )}
          {this.renderMovie(
            `Deadpool 2`, // title
            `https://www.imdb.com/title/tt5463162/?ref_=fn_al_tt_1`, // link
            `#ff0`, // color
            `08.01.2020`, // date
            `https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_.jpg`, // poster
            `Movie Poster for 'Deadpool 2'` // alt
          )}
          {this.renderMovie(
            `The Lego Movie`, // title
            `https://www.imdb.com/title/tt1490017/?ref_=nv_sr_srsg_0`, // link
            `#0ff`, // color
            `14.01.2020`, // date
            `https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg`, // poster
            `Movie Poster for 'The Lego Movie'` // alt
          )}
          {this.renderMovie(
            `Le Grand Blue (Im Rausch der Tiefe)`, // title
            `https://www.imdb.com/title/tt0095250/mediaviewer/rm312361984`, // link
            `#f0f`, // color
            `21.01.2020`, // date
            `https://m.media-amazon.com/images/M/MV5BOTg5NGE1MjYtZjU3Zi00NWZhLTg4ZmEtMDI0YzMwN2Y2NDIxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg`, // poster
            `Movie Poster for 'Le Grand Blue'` // alt
          )}
          <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}


function showInfo(link) {
  return (
    console.log("does nothing, yet!")
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
