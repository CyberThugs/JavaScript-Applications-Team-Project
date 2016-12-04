'use strict';

import React from 'react';

require('./background.css');

class Background extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            background: 0
        }
    }

    backgrounds = [
        require('../../assets/backgrounds/669681.jpg'),
        require('../../assets/backgrounds/Desktop-superhero-film-iron-man-hd-wallpapers.jpg'),
        require('../../assets/backgrounds/hulk-the-hulk-marvel-wolverine-blood-light-wallpaper-1.jpg'),
        require('../../assets/backgrounds/Images-superhero-hd-wallpapers.jpg'),
        require('../../assets/backgrounds/Silver-surfe-superhero-wallpaper.jpg'),
        require('../../assets/backgrounds/Superhero-Wallpapers-Pictures-Desktop.jpg')
    ];

    interval = 0;

    //noinspection JSUnusedLocalSymbols
    shouldComponentUpdate(props, state) {
        return state.background !== this.state.background;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let background = this.state.background + 1;
            if (background > this.backgrounds.length - 1) background = 0;
            this.setState({background});
        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render () {
        return (
            <div className="Backgrounds">
                 {this.backgrounds.map((src, index) => {
                     return <div key={index} style={{backgroundImage: 'url(' + src + ')'}} className={index === this.state.background ? 'active' : ''}></div>;
                 })}
            </div>
        );
    };
}


module.exports = Background;
