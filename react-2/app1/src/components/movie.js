const Movie = (props) => {
    return ( 
        <div>
            <img src='https://unsplash.it/200' />
            <p>Film: {props.Film}</p>
            <p>Year: {props.Year}</p>
            <p>Producer: {props.Produce}</p>
        </div>
    )
}
export default Movie ;