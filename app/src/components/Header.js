import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {

    constructor(props) {
      super(props);
    }

    componentDidMount = () => {
        if (window.Notification && Notification.permission !== "granted") {
            Notification.requestPermission(function (status) {
              if (Notification.permission !== status) {
                Notification.permission = status;
              }
            });
          }        
    }

    onClick = () => {
        console.log("test")
        console.log(window.Notification && Notification.permission)
        if (window.Notification && Notification.permission === "granted") {
            let myNotification = new Notification('Title', {
                appName: "Electron",
                body: 'Lorem Ipsum Dolor Sit Amet'
              })
        }
    }
    
    render() {

        return (
            <div>
                Header
                <ul>
                    <li>
                        <Link to="/">home</Link>                        
                    </li>
                    <li>
                        <Link to="/test">test-home</Link>                        
                    </li>
                    <li>
                        <button onClick={this.onClick}>
                            test clieck
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
  }
  
  export default Header;
