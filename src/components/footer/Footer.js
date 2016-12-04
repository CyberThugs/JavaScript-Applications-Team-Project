import React, { Component } from 'react';
import './footer.css';
import $ from 'jquery';




export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.toggleHeader = this.toggleHeader.bind(this);
    }

    toggleHeader(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    }

    render() {

        return (
            <div className="footer">
                <a href="javascript:;" className="btn btn-default" id="menu-toggle" onClick={this.toggleHeader}>Collapse</a>
            </div>
        );
    }

}

