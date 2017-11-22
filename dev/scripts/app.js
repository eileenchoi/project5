import React from 'react';
import ReactDOM from 'react-dom';
const donuts = ['Sourcream glazed', 'Honey dip', 'Boston cream'];
import Donut from './donut';


class App extends React.Component {
    render() {
      return (
        <div>
          {donuts.map(donut => {
            return (
              <Donut donutName={donut} />
            
            )
          })}
          {/* <h1>List</h1>
          <h2>list category</h2>
          <form action="">
              <input type="text"/>  
              <button>submit</button>
          </form> */}
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

//pseudo code
//the user will type into the input and press enter
  //if the input has text
  //save the input from the form
  //take the input, create a list item that contains whatever the user entered 
  //put the new list item on the page in teh existing <ul>
  //be able to remove items as needed
