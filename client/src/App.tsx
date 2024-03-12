import './styles.css';

const App = () => {
    const evtSource = new EventSource('http://localhost:9000/events');

    // evtSource.onmessage = (event) => {
    //     const newElement = document.createElement("li");
    //     const eventList = document.getElementById("list");
      
    //     newElement.textContent = `message: ${event.data}`;
    //     eventList!.appendChild(newElement);
    // }

    return (
        <>
            <h1>Write your code here!</h1>
            <ul id='list'>

            </ul>
        </>
    );
};

export default App;
