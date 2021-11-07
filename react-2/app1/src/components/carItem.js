const CarItem = (props) => {
    console.log(props.year)
    return ( 
        <ul>
            <li>CarModel : {props.CarModel}</li>
            <li>CarYear : {props.year}</li>
            <li>CarType : {props.CarType}</li>
        </ul>
    );
}

export default CarItem;