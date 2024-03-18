import { useEffect, useRef, useState } from "react";
import { Notification, PositionStyle } from "../types";

export default function NotificationsList({ 
    maxNotifs, 
    position,
    notifTimeout, 
}:{ 
    maxNotifs: number; 
    position: PositionStyle;
    notifTimeout: number;
}) {
    const [notifArr, setNotifArr] = useState<Notification[]>([]);

    useEffect(() => {
        const evtSource = new EventSource('http://localhost:9000/events');
        evtSource.onmessage = (event) => {
            event.preventDefault();
            const newNotif: Notification = JSON.parse(event.data);
            setNotifArr((notifArr) => {
                if (notifArr.length >= maxNotifs) {
                    notifArr = notifArr.slice(1);
                }
                return [...notifArr, newNotif];
            });
            setTimeout(() => {
                setNotifArr((notifArr) => {
                    return notifArr.filter((notif) => notif.msg_id !== newNotif.msg_id);
                });
            }, notifTimeout);
        };
    }, []);


    const notifElements = notifArr.map((notif : Notification) => <NotficationListItem key={notif.msg_id} notif={notif} />);

    return (
        <ul className="list notifications-list" style={position}>
            {notifElements}
        </ul>
   
    );
}

function NotficationListItem({ 
    notif, 
}:{ 
    notif: Notification; 
}) {
    return (
        <div className='listtile notification'>
            {notif.msg}
        </div>
    )
}