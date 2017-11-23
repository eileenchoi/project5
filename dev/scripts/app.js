import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';


class App extends React.Component {
    constructor(){
        super();
        this.state ={
            newListArray: []
           
            //where added list items will go. this goes here because the app is where the action of gettin new list items is going to happen
        }
        this.addNewItem = this.addNewItem.bind(this);
    }
    //new method to call by submitForm, currentItem is the user input which is why we added it as the param
    addNewItem(currentItem){
    //clone current array, push user inputs to this array, set state to newUserArray

        const newList = Array.from(this.state.newListArray);
        newList.push(currentItem);
        this.setState({
            newListArray: newList
        })
    }
    render(){
      return (
        <div>
            <h1>Lists</h1>
            <ListForm submitForm={this.addNewItem} /> 
            {/* passing function through submitForm */}   
            <ul>
            {/* map through list array and return the inputted item */}
                {this.state.newListArray.map((todo, index) =>{
                    return(
                    <ListItem key={`item-${index}`} item = {todo} />
                    )
                    // listItem defined below as props 
                })}
            </ul>  
        </div>

      )          
    }   
}

//dummy component just an empty li, making a place for the input info to go
const ListItem = (props)=>{
    console.log(props);
    return(
        <li>{props.item}</li>
        
    )
}


//component for input form where user inputs will be entered
class ListForm extends React.Component{
    //constructor is where we will initialize state, or bind methods, in this case, bind the event handler for 'on submit' adding of list items 
    constructor(){
        super();
        this.state = {
                currentItem: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(e) {
        this.setState({
            currentItem: e.target.value
            
        })

    }

    //handleSubmit changes the state on submit of the form, altering current item by replacing the empy string with the user input letter by letter. the prop references the empy array in the app component
    
    handleSubmit (e) {
        e.preventDefault();
        this.props.submitForm(this.state.currentItem);
        // referencing a functino where i'm calling and passing 
        this.setState({
            currentItem: ''
        });
    } 

    TakeTextOnly(e){

    }


    render(){
        return(
            
                <form action="" onSubmit={this.handleSubmit}>
                <input type="text" onChange = {this.handleChange} value={this.state.currentItem} ref = 'inputfield' />
                <button disabled={!this.state.currentItem}>add</button>
                </form>
        )

    } //render end  
} //ListForm componenet ends

ReactDOM.render(<App />, document.getElementById('app'));

//pseudo code
//the user will type into the input and press enter @@
    //need submit event listener, callback function to be called on submit
    //get value from input (list item)
    //add value to list
    
  //if the input has text
    //if list item is text, it will evaluate to 'true', if not it will be false. if the string is empty set up alert o prompt user

  //save the input from the form
    //save list items to firebase
    //be able to remove items as needed
    //need function to remove item on click
    //clear the 'value' of the input when the 'done' is checked
    //toggle list item to grey (text muted) when the item is clicked, back to black when unclicked. 
  //put the new list item on the page in teh existing <ul>


  