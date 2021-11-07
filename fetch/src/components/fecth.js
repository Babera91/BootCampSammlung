
import './fetch.css';
import React from 'react';

export default class Fetch extends React.Component {
    state = {
        loding: true,
        person: null
    };
    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loding: false })

    }
    render() {
        return (
            <div>
                {this.state.loding || !this.state.person ?
                    (<div> loading... </div>
                    ) : (
                        <div>
                            <img src={this.state.person.picture.large} alt="#" />
                            <div>{this.state.person.name.title}</div>
                            <div>{this.state.person.name.first}</div>
                            <div>{this.state.person.name.last}</div>
                        </div>
                    )}
            </div>
        );
    }
}

/*
{"results":[{"gender":"female","name":{"title":"Ms","first":"Amelia","last":"Andersen"},
"location":{"street":{"number":8834,"name":"Lake of Bays Road"},
"city":"Dorchester",
"state":"New Brunswick",
"country":"Canada",
"postcode":"L3H 6K5",
"coordinates":{"latitude":"-68.4965","longitude":"22.2743"},
"timezone":{"offset":"+5:00","description":"Ekaterinburg, Islamabad, Karachi, Tashkent"}},
"email":"amelia.andersen@example.com",
"login":{"uuid":"10fae944-7c1b-4902-88dc-3c1d8750e44a",
"username":"silverelephant820",
"password":"sponge",
"salt":"WgRLdktH",
"md5":"ae2db4450d84e9da169c326cf61b55a5",
"sha1":"2661a4c387024d113c95b4c6fae6c1374466e14f",
"sha256":"d8c346087b5d85d28336c04202123590bc7ab4e79cf5e4f0a512bce11cbd4d8b"},
"dob":{"date":"1948-02-28T15:02:10.958Z","age":73},
"registered":{"date":"2017-04-12T22:52:57.062Z","age":4},
"phone":"430-932-6813",
"cell":"731-786-7019",
"id":{"name":"","value":null},
"picture":{"large":"https://randomuser.me/api/portraits/women/48.jpg",
"medium":"https://randomuser.me/api/portraits/med/women/48.jpg",
"thumbnail":"https://randomuser.me/api/portraits/thumb/women/48.jpg"},
"nat":"CA"}],
"info":{"seed":"48326fd1cc282d76","results":1,"page":1,"version":"1.3"}}
*/
