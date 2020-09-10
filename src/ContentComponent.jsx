import React, { Component } from 'react';
import './style.css';

export default class ContentComponent extends Component {

    state = {
        noOfRows: [],
        noOfCols: [],
        showBlocks: false,
    }

    render() {
        const { noOfRows, noOfCols, showBlocks } = this.state;
        console.log(noOfRows);
        return (
            <div className="App">
                <div className="block-container">
                    {
                        showBlocks &&
                            noOfRows.map((eachRow, ind) => {
                            return (
                                <div>{eachRow}</div>
                            )
                            })
                    }
                </div>
                <div className="input-container">
                    <h3>Block Config</h3>
                    <div>
                        <span>Row</span>
                        <input type="text" onChange={this.onRowChange}/>
                    </div>
                    <div>
                        <span>Column</span>
                        <input type="text" onChange={this.onColChange}/>
                    </div>
                    <div>
                        <button onClick={this.onSubmit}>Generate</button>
                        <button onClick={this.onClear}>Clear</button>
                    </div>
                    <h3>Selected Block</h3>
                </div>
            </div>
        )
    }

    onSubmit = () => {
        this.setState({ showBlocks: true });
    }

    onClear = () => {

    }

    onRowChange = event => {
        const tempArr = [];
        for(let i = 1; i <= event.target.value; i++) {
            tempArr.push(i);
        }
        console.log(tempArr);
        this.setState({ noOfRows: tempArr });
    }

    onColChange = event => {

        const tempArr = [];
        for(let i = 1; i <= event.target.value; i++) {
            tempArr.push(i);
        }
        this.setState({ noOfCols: tempArr });
    }

    /*showBlock = () => {
        for(let i = 1; i <= this.state.noOfRows; i++) {
            return (
                <div>{i}</div>
            )
        }
    }
*/
}
