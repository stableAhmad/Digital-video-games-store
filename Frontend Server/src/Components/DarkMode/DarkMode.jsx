import React, { useEffect } from 'react';
import Darkmode from 'darkmode-js';

export default function DarkMode() {
    useEffect(() => {
        const darkmode = new Darkmode({
            label: 'Toggle dark mode',
            attachTo: '#darkmode-toggle',
            buttonColorDark: '#000000',
            buttonColorLight: '#ffffff',
        });

        darkmode.showWidget();

        return () => {
            darkmode.destroy();
        };
    }, []);

    return <div id="darkmode-toggle" className=''></div>;
}
