import React, { Component } from 'react';

class NotFound extends Component {

    constructor(props) {
      super(props);
      
    }
  
    render() {

        return (
            <div>
                <span>
                    {this.props.location.pathname} 404.
                </span>
            </div>
        );
    }
  }
  
  export default NotFound;
