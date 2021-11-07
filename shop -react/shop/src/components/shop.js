import './shop.css'
const Shop = (props) => {
    return ( 
        <div id="shop">
            <img src={props.img} alt=""/>
            <p>{props.Name}</p>
            <p>{props.Dollar}</p>
            <button> BUY NOW </button>
        </div>
    );
}

export default Shop;