import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    componentWillUnmount() {
        console.log('counter - umount');
    }
    // constructor() {
    //    super();
    //    this.handleIncrement = this.handleIncrement.bind(this);
   // }



    render() { 
        console.log("counter! - rendered");
        return ( <div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button 
                        onClick={() => this.props.onIncrement(this.props.counter)} 
                        className="btn btn-secondary btn-sm">Increment
                    </button> 
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">Delete</button>
                </div> 
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;