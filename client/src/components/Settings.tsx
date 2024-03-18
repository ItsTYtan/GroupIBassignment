import { EffectCallback, forwardRef, useEffect } from "react"

export default forwardRef(function Settings({
    handleFormSubmit
}:{
    handleFormSubmit: EffectCallback
}, ref: React.LegacyRef<HTMLFormElement>) {
    
    useEffect(handleFormSubmit, []);

    return (
        <form className="list settings-list" ref={ref}>
            <div className="listtile settings-tile">
                <div className="setting-name">Notification count</div>
                <input type="text" defaultValue={3} name="notification-count"></input>
            </div>
            <div className="listtile settings-tile">
                <div className="setting-name">Notification position</div>
                <label htmlFor="top-right">Position 1</label>
                <input id="top-right" type="radio" name="notification-position" value={1} defaultChecked={true}/>
                <label htmlFor="top-left">Position 2</label>
                <input id="top-left" type="radio" name="notification-position" value={2}/>
                <label htmlFor="bottom-right">Position 3</label>
                <input id="bottom-right" type="radio" name="notification-position" value={3}/>
                <label htmlFor="bottom-left">Position 4</label>
                <input id="bottom-left" type="radio" name="notification-position" value={4}/>
            </div>
            <div className="listtile settings-tile">
                <div className="setting-name">Notification disappear time</div>
                <input type="text" defaultValue={5} name="notfication-disappear-time"></input>
            </div>
        </form>
    )
});