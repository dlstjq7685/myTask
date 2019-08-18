import React, { Component } from 'react';
import { Link } from "react-router-dom";
  
class Header extends Component {

    constructor(props) {
      super(props);
      
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
                </ul>
            </div>
        );
    }
  }
  
  export default Header;
