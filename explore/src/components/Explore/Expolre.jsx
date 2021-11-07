import "../Explore/Explore.css"
const Explore = () => {
    return (
        <div id="back">
            <h1>Explore and Travel</h1>
            <h3 id="Holiday">Holiday finder</h3>
            <div id="border"></div>
            <select name="Location" id="">
                <option value="">Russland</option>
                <option value="England"></option>
            </select>
            <select name="Activity" id="secound">
                <option value="">Saufen</option>
                <option value="">noch mehr Saufen</option>
            </select>
            <div id="Button">
                <input type="button" value="Explore" id="Explore" />
            </div>
            <div id="back2">
                <h2>
                    A new way to explore the world 
                </h2>
                <p id="aNew">For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect 
                    trip, but now, they can also let Lonely Planet Experiences lead the way
                </p>
                <input type="button" value="Learn more" id="Explore" />
            </div>
        </div>
    );
}

export default Explore;