import { useState } from 'react';
import '../public/styles.css';
import Navbar from './components/Navbar';
import { Position, Tab } from './enums';
import NotificationsList from './components/NotficationsList';

const App = () => {
    const [tab, setTab] = useState(0);

    function handleTabClick(tab: Tab) {
        setTab(tab);
    }

    return (
        <>
            <Navbar tab={tab} handleTabClick={handleTabClick} />
            { tab == Tab.Main && <h1>Main</h1> }
            { tab == Tab.Settings && <h1>Settings</h1> }
            <NotificationsList maxNotifs={100} position={Position.TopLeft} notifTimeout={5000}/>
        </>
    );
};

export default App;
