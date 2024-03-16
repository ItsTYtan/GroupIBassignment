'use client'

import { useState } from "react";
import { Tab } from "../enums";

export default function Navbar({
    tab, 
    handleTabClick, 
}:{
    tab: Tab;
    handleTabClick: Function;
}) {
    return (
        <nav>
            <h1>Notification task</h1>
            <TabButton handleClick={handleTabClick} tab={Tab.Main} buttonDisplayText='Main' />
            <TabButton handleClick={handleTabClick} tab={Tab.Settings} buttonDisplayText='Settings' />
        </nav>
    )
}

//React component for each tab button
function TabButton({ 
    handleClick, 
    tab, 
    buttonDisplayText 
} : {
    handleClick: Function;
    tab: Tab;
    buttonDisplayText: String;
}) {
    return (
        <button
            id="tabButton"
            onClick={() => handleClick(tab)}
        >
            {buttonDisplayText}
        </button>
    )
}