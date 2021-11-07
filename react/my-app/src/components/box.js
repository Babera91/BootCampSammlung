import bild from '../assets/img/01-Books.png'
const Box = () => {
    return ( 
        <div>
            <img src={bild} alt='#'></img>
            <p>
                Das Buch ist ein Buch
            </p>
            <p>
                29.95 $
            </p>
        </div>
    );
}

export default Box;