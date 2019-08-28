import React, { Component } from 'react';
import { Link } from "react-router-dom";

import styles from './Card.module.css'

class Card extends Component {

    constructor(props) {
      super(props);
    }
    
    render() {

        return (
            <div className={styles.card}>
                <img src="https://t1.daumcdn.net/daumtop_chanel/op/20170315064553027.png" alt="Avater"/>
                <div className={styles.container}>
                    <span>
                        card
                    </span>
                </div>
            </div>
        );
    }
  }
  
  export default Card;
