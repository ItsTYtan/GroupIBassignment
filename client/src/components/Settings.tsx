import { EffectCallback, forwardRef, useEffect } from "react"
import { PositionStyle } from "../types";

export default forwardRef(function Settings({
    handleFormSubmit,
    prevMaxNotifs,
    prevPosition,
    prevNotifTimeout,
}:{
    handleFormSubmit: EffectCallback,
    prevMaxNotifs: number,
    prevPosition: PositionStyle,
    prevNotifTimeout: number,
}, ref: React.LegacyRef<HTMLFormElement>) {
    
    useEffect(handleFormSubmit, []);

    return (
        <form className="list settings-list" ref={ref}>
            <div className="listtile settings-tile">
                <div className="setting-name">Notification count</div>
                <input type="text" defaultValue={prevMaxNotifs} name="notification-count"></input>
            </div>
            <div className="listtile settings-tile">
                <div className="setting-name">Notification position</div>
                <label htmlFor="top-right">Position 1</label>
                <input id="top-right" type="radio" name="notification-position" value={1} defaultChecked={prevPosition === PositionStyle.topRight}/>
                <label htmlFor="top-left">Position 2</label>
                <input id="top-left" type="radio" name="notification-position" value={2} defaultChecked={prevPosition === PositionStyle.topLeft}/>
                <label htmlFor="bottom-right">Position 3</label>
                <input id="bottom-right" type="radio" name="notification-position" value={3} defaultChecked={prevPosition === PositionStyle.bottomRight}/>
                <label htmlFor="bottom-left">Position 4</label>
                <input id="bottom-left" type="radio" name="notification-position" value={4} defaultChecked={prevPosition === PositionStyle.bottomLeft}/>
            </div>
            <div className="listtile settings-tile">
                <div className="setting-name">Notification disappear time</div>
                <input type="text" defaultValue={prevNotifTimeout / 1000} name="notification-disappear-time"></input>
            </div>
        </form>
    )
});