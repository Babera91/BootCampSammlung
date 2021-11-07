import Collapsible from 'react-collapsible';

const ListItem = (props) => {
    return (
        <li>
            <Collapsible trigger={props.question}>
                    <p>
                        {props.answer}
                    </p>
            </Collapsible >
        </li >
    );
}

export default ListItem;