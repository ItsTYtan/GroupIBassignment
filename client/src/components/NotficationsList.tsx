import { useEffect, useRef, useState } from "react";
import { Notification } from "../types";
import { Position } from "../enums";

export default function NotificationsList({ 
    maxNotifs, 
    position,
    notifTimeout, 
}:{ 
    maxNotifs: number; 
    position: Position;
    notifTimeout: number;
}) {
    const [notifArr, setNotifArr] = useState<Notification[]>([]);

    useEffect(() => {
        const evtSource = new EventSource('http://localhost:9000/events');
        evtSource.onmessage = (event) => {
            event.preventDefault();
            const newNotif: Notification = JSON.parse(event.data);
            setNotifArr((notifArr) => [...notifArr, newNotif]);
            setTimeout(() => {
                setNotifArr((notifArr) => {
                    return notifArr.filter((notif) => notif.msg_id !== newNotif.msg_id);
                });
            }, notifTimeout);
        };
    }, []);

    if (notifArr.length > maxNotifs) {
        const newNotifArr = notifArr.slice(1);
        setNotifArr(newNotifArr);
    }

    const notifElements = notifArr.map((notif : Notification) => <NotficationListItem key={notif.msg_id} notif={notif} />);

    return (
        <ul>
            {notifElements}
        </ul>
   
    );
}

function NotficationListItem({ 
    notif, 
}:{ 
    notif: Notification; 
}) {
    return <li>{notif.msg}</li>
}