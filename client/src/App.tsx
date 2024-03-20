import { useRef, useState } from 'react';
import '../public/styles.css';
import Navbar from './components/Navbar';
import { Tab } from './enums';
import { PositionStyle } from './types';
import NotificationsList from './components/NotficationsList';
import Settings from './components/Settings';

const App = () => {
    const [tab, setTab] = useState(0);
    const [maxNotifs, setMaxNotifs] = useState(3);
    const [position, setPosition] = useState<PositionStyle>(PositionStyle.topRight);
    const [notifTimeout, setNotifTimeout] = useState(5000);

    const formRef = useRef<HTMLFormElement>(null);

    function handleTabClick(nextTab: Tab, prevTab: Tab) {
        if (prevTab === Tab.Settings) {
            formRef.current?.requestSubmit();
            if (!formRef.current?.checkValidity()) {
                return;
            }
        }
        setTab(nextTab);
    }

    function handleFormSubmit() {
        const form = document.querySelector('form');
        
        form?.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            for (const item of formData) {
                switch (item[0].toString()) {
                    case 'notification-count': {
                        setMaxNotifs(parseInt(item[1].toString()));
                        break;
                    }
                    case 'notification-position': {
                        setPosition(PositionStyle.numToPosition(
                            parseInt(item[1].toString())
                        ));
                        break;
                    }
                    case 'notification-disappear-time': {
                        setNotifTimeout(parseInt(item[1].toString()) * 1000);   
                        break;
                    }
                }
            }
        })
    }

    return (
        <main>
            <Navbar currTab={tab} handleTabClick={handleTabClick} />
            <section>
                { tab == Tab.Main && <NotificationsList maxNotifs={maxNotifs} position={position} notifTimeout={notifTimeout}/> }
                { tab == Tab.Settings && <Settings prevMaxNotifs={maxNotifs} prevPosition={position} prevNotifTimeout={notifTimeout} handleFormSubmit={handleFormSubmit} ref={formRef}/> }
            </section>
        </main>
    );
};

export default App;
