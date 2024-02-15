import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incCount() {
        //case1
        // this.setState({ count: this.state.count + 1},
        //     ()=> {
        //         console.log('Callback values',this.state.count)
        //     }
        // )
        //        case2
        this.state.count = this.state.count+1
        console.log(this.state.count)
        this.setState((prevstate) => ({
            count: prevstate.count
        }),
                ()=> {
                    console.log('Callback values',this.state.count)
                }
            )
    }
//     this.setState((prevstate,props) => ({
//         count: prevstate.count+props.value
//     }),
//             ()=> {
//                 console.log('Callback values',this.state.count)
//             }
//         )
// }
    decCount() {
        this.setState({ count: this.state.count - 1 })
    }
    IncFive(){
        for(var i = 0;i<5;i++){
            this.incCount()
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.incCount()}>Count++</button>
                <br></br>
                {this.state.count}
                <br></br>
                <button onClick={() => this.decCount()}>Count--</button>
                <br></br>
                <button onClick={() => this.IncFive()}>Count+5</button>
            </div>
        )
    }
}