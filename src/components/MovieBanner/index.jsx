import "./style.css";
const MovieBanner = (props) => {
  return (
    <div className="movieBanner">
      <div className="mvBanner-content">
        <div className="frame1">
          <div className="moviePoster">
            <img src={props.movie.image} alt="" />
          </div>
          <div className="quickView">
            <div className="qV-frame">
              <h2 className="qv-title">Movie Name:</h2>
              <div className="qv-title-text">{props.movie.movieName}</div>
            </div>
            <div className="qV-frame">
              <h2 className="qv-title">Episode:</h2>
              <div className="qv-title-text">{props.movie.episode}</div>
            </div>
            <div className="qV-frame">
              <h2 className="qv-title">Type:</h2>
              <div className="qv-title-text">Tv</div>
            </div>
          </div>
          <div className="closeBanner" onClick={props.onCloseBanner}>
            X
          </div>
        </div>
        <div className="mvDescription">
          <h2 className="title">Description:</h2>
          <p className="description">{props.movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
