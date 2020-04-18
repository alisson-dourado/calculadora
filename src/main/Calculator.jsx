import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = {...initialState}

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDig = this.addDig.bind(this)
    }

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDig(n) {
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue === '0'
           || this.state.clearDisplay
        const curretValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = curretValue + n
        this.setState({displayValue, clearDisplay:false})

        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }
    }
  
    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDig} />
                <Button label="8" click={this.addDig} />
                <Button label="9" click={this.addDig} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDig} />
                <Button label="5" click={this.addDig} />
                <Button label="6" click={this.addDig} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDig} />
                <Button label="2" click={this.addDig} />
                <Button label="3" click={this.addDig} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDig} double />
                <Button label="." click={this.addDig} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}

