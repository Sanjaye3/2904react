import {useParams} from 'react-router-dom';

export function MovieDetails({movieList}){
    const {id} = useParams();
    const movie=movieList[id];
    // console.log(movieList,movie);
    console.log(movie.name);
    return (
        <div>
            <h1> Movie details of {movie.name} </h1>
        </div>
    )
}


export default MovieDetails;