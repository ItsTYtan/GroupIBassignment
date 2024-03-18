'use client'

import { useState } from "react";
import { Tab } from "../enums";

export default function Navbar({
    currTab, 
    handleTabClick, 
}:{
    currTab: Tab;
    handleTabClick: Function;
}) {

    //React component for each tab button
    function TabButton({ 
        tab, 
        buttonDisplayText 
    } : {
        tab: Tab;
        buttonDisplayText: String;
    }) {
        return (
            <button
                id="tabButton"
                onClick={() => handleTabClick(tab, currTab)}
            >
                {buttonDisplayText}
            </button>
        )
    }

    return (
        <nav>
            <h1>Notification task</h1>
            <TabButton tab={Tab.Main} buttonDisplayText='Main' />
            <TabButton tab={Tab.Settings} buttonDisplayText='Settings' />
        </nav>
    )
}

