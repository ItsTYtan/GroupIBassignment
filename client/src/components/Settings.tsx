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
                <div className="setting-name text-small roboto-regular">Notification count</div>
                <input type="text" className="text-small roboto-regular" defaultValue={prevMaxNotifs} name="notification-count"></input>
            </div>
            <div className="listtile settings-tile">
                <div className="setting-name text-small roboto-regular">Notification position</div>
                <label className="text-small roboto-regular" htmlFor="top-right">Position 1</label>
                <input id="top-right" type="radio" name="notification-position" value={1} defaultChecked={prevPosition === PositionStyle.topRight}/>
                <label className="text-small roboto-regular" htmlFor="top-left">Position 2</label>
                <input id="top-left" type="radio" name="notification-position" value={2} defaultChecked={prevPosition === PositionStyle.topLeft}/>
                <label className="text-small roboto-regular" htmlFor="bottom-right">Position 3</label>
                <input id="bottom-right" type="radio" name="notification-position" value={3} defaultChecked={prevPosition === PositionStyle.bottomRight}/>
                <label className="text-small roboto-regular" htmlFor="bottom-left">Position 4</label>
                <input id="bottom-left" type="radio" name="notification-position" value={4} defaultChecked={prevPosition === PositionStyle.bottomLeft}/>
            </div>
            <div className="listtile settings-tile">
                <div className="setting-name text-small roboto-regular">Notification disappear time</div>
                <input type="text" className="text-small roboto-regular" style={{margin: 0,}} defaultValue={prevNotifTimeout / 1000} name="notification-disappear-time"></input>
                <div className="text-small roboto-regular">sec</div>
            </div>
        </form>
    )
});