import './services.css'
const Services = () => {
    const isAvailable = false;
    const styleAvailable = {
        color: 'green',
        border: ' 1px solid green',
        padding: '30px',
        background: 'transparent',
        fontSize: '40px'
    }
    const styleNotAvailble = {
        color: 'tomato',
        border: ' 1px solid tomato',
        padding: '30px',
        background: 'transparent',
        fontSize: '40px'
    }

    return (
        <div>
            <h1>Exercice Services</h1>
            {/* <button style={isAvailable === true ? styleAvailable : styleNotAvailble}> */}
            <button className={isAvailable === true ? 'available' : 'not-available'}>
                {isAvailable === true ? 'bestellen' : 'Nicht Verfügbar'}
            </button>
        </div>
    );
}

export default Services;