import React, { Component } from 'react';
import '../styles.css'

// Class component 
class ClassGreeting extends Component {

   // What we want to show up on the page 
    render() {
        return <p className='greeting'>This is a class-based greeting!</p>;
    }
}
export default ClassGreeting;