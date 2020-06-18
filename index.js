import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            array: []
        }
        this.text = '';
    }

    handleChange = (e) => {
        this.text = e.target.value;
    }

    handleClick = () => {
        this.setState({
            array: [...this.state.array, this.text]
        })

    }

    removeItem(index) {
        const array = this.state.array;
        array.splice(index, 1);
        this.setState({ array });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Add</button>

                {this.state.array.map((i, index) => <li key={index}> {i}
                    <button onClick={() => this.removeItem(index)}>x</button> </li>)}
            </div>
        );
    }

}
ReactDOM.render(<Form />, document.querySelector('#root'));
