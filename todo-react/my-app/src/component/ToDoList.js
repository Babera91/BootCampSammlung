import ToDo from "./ToDo";

import check from "../assets/img/check.png";
import doing from "../assets/img/doing.png";
import no from "../assets/img/no.png";
import gym from "../assets/img/gym.png";
import bill from "../assets/img/bill.png";
import dance from "../assets/img/dance.png";
import eat from "../assets/img/eat.png";
import book from "../assets/img/book.png";
import organize from "../assets/img/organize.png";

const db = [
    {
        mark: check,
        text: "Hit the gym",
        icon: gym
    },
    {
        mark: check,
        text: "Pay bills",
        icon: bill
    },
    {
        mark: doing,
        text: "Meet George",
        icon: dance
    },
    {
        mark: doing,
        text: "Buy eggs",
        icon: eat
    },
    {
        mark: no,
        text: "Read a book",
        icon: book
    },
    {
        mark: no,
        text: "Organize office",
        icon: organize
    },
]


const ToDoList = () => {
    return (
        <ul>
            {db.map((db, index) => (
                <ToDo mark={db.mark} text={db.text} icon={db.icon}></ToDo>
            ))}
        </ul>
    );
}

export default ToDoList;