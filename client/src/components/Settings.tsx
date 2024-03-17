export default function Settings() {
    return (
        <ul className="list settings-list">
            <div className="listtile settings-tile">
                <div className="setting-name">Notification count</div>
                <input type="text" defaultValue={0}></input>
            </div>
            <div className="listtile settings-tile">
                <div className="setting-name">Notification position</div>
                <label htmlFor="top-left">Position 1</label>
                <input id="top-right" type="radio" name="notification-position" />
                <label htmlFor="top-right">Position 2</label>
                <input id="top-right" type="radio" name="notification-position" />
                <label htmlFor="bottom-left">Position 3</label>
                <input id="bottom-left" type="radio" name="notification-position" />
                <label htmlFor="bottom-right">Position 4</label>
                <input id="bottom-right" type="radio" name="notification-position" />
            </div>
            <div className="listtile settings-tile">
                <div className="setting-name">Notification disappear time</div>
                <input type="text" defaultValue={0}></input>
            </div>
        </ul>
    )
}