import { useState } from 'react';
import '../public/styles.css';
import Navbar from './components/Navbar';
import { Tab } from './enums';
import { PositionStyle } from './types';
import NotificationsList from './components/NotficationsList';
import Settings from './components/Settings';

const App = () => {
    const [tab, setTab] = useState(0);

    function handleTabClick(tab: Tab) {
        setTab(tab);
    }

    return (
        <main>
            <Navbar tab={tab} handleTabClick={handleTabClick} />
            <section>
                { tab == Tab.Main && <NotificationsList maxNotifs={100} position={PositionStyle.topRight} notifTimeout={5000}/> }
                { tab == Tab.Settings && <Settings/> }
            </section>
        </main>
    );
};

export default App;
