const Movie = (props) => {
  const handleClickMovie = () => {
    props.onOpenBanner({
      open: true,
      data: props.dataMovie,
    });
  };
  return (
    <div className="movies" onClick={handleClickMovie}>
      <img src={props.dataMovie.image} alt="" />
    </div>
  );
};

export default Movie;
