import "../Navigation/Navigation.css"
const Navigation = () => {
    return (
        <div>
            <ul id="nav">
                <li className="li">
                    <a>Home</a>
                </li>
                <li className="li">
                    <a href="../../pages/Destination.jsx">Destination</a>
                </li>
                <li className="li">
                    <a href="">About</a>
                </li>
                <li className="li">
                    <a href="">Partner</a>
                </li>
                <li className="li">
                    <input type="button" value="Login" id="Login" />
                </li>
                <li className="li">
                    <input type="button" value="Register" id="Register" />
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
