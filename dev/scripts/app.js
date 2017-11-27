import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
// import { Timeline } from 'react-twitter-widgets'
// import List from './List'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDhiEd7H5g88w-qd9EiDsCuBy4PDyS3REQ",
    authDomain: "project5-4e3ce.firebaseapp.com",
    databaseURL: "https://project5-4e3ce.firebaseio.com",
    projectId: "project5-4e3ce",
    storageBucket: "project5-4e3ce.appspot.com",
    messagingSenderId: "757990881262"
};

firebase.initializeApp(config);

class App extends React.Component {
    constructor(){
        super();
        this.state ={
            newListArray: [],
   
                       
            //where added list items will go. this goes here because the app is where the action of gettin new list items is going to happen
        }
        this.addNewItem = this.addNewItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.markItem = this.markItem.bind(this);
    }
    componentDidMount(){
        //for firebase. 
        const dbRef = firebase.database().ref()
        dbRef.on("value", (firebaseData)=>{
            const itemsArray = []
            const itemsData = firebaseData.val();
            for (let itemKey in itemsData){
                itemsData[itemKey].key = itemKey;
               
                console.log(itemsArray)
                //creating a newKey property on the object so that we can reference the key. the newKey will be the firebase key
                itemsArray.push(itemsData[itemKey]);
                //itemsdata are the objects
                this.setState({
                    newListArray: itemsArray
                //puts the saved items in firebase on the page
                })
            }
        });

    }
    //new method to call by submitForm, currentItem is the user input which is why we added it as the param
    addNewItem(currentItem){
    //clone current array, push user inputs to this array, set state to newUserArray
        const newList = Array.from(this.state.newListArray);
        newList.push(currentItem);
        this.setState({
            newListArray: newList   
        })
        this.setState({
            
        });
        //FIREBASE //
        const dbRef = firebase.database().ref();
        dbRef.push(currentItem)
        console.log(currentItem)
    }
   
    removeItem(index){
    const dbRef = firebase.database().ref(index);
    dbRef.remove();

    }
  

    //toggle items
    markItem(index, key){
        const itemMarked= Array.from(this.state.newListArray);
        if (itemMarked[index].marked == true){
            itemMarked[index].marked = false
        } else {
            itemMarked[index].marked = true 
        }
        // console.log(itemMarked[index], 'i am what is going into firebase')
        const dbRef = firebase.database().ref(`${key}/`);
        dbRef.update(itemMarked[index]);

    }

    render(){
      return (
        <div className = "outerDiv">
            <div className="innerDiv">
            <div className = "header">
                <h1>Grocery List</h1>
              </div>
                <ListForm submitForm={this.addNewItem} /> 
                {/* passing function through submitForm */}   
                <ul>
                {/* map through list array and return the inputted item */}
                    {this.state.newListArray.map((todo, index) =>{
                        return(
                        <ListItem key={todo.key} data={todo} item={todo.itemText} remove={this.removeItem} itemIndex={index} mark={this.markItem} complete={todo.marked} /> 
                        )
                        // listItem defined below as props 
                    })}
                </ul>  
            </div>
            <follow username="@eileenchoi_" />
        </div> //outerDiv

      )          
    }   
}

//component for input form where user inputs will be entered
class ListForm extends React.Component{
    //constructor is where we will initialize state, or bind methods, in this case, bind the event handler for 'on submit' adding of list items 
    constructor(){
        super();
        this.state = {
                currentItem: {
                    marked: false,
                    itemText: ""
                }
            }
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            currentItem: {
                marked: this.state.currentItem.marked,
                itemText: e.target.value
            }
        })

    }

    //handleSubmit changes the state on submit of the form, altering current item by replacing the empy string with the user input letter by letter. the prop references the empy array in the app component
    
    handleSubmit (e) {
        e.preventDefault();
        this.props.submitForm(this.state.currentItem);
        // referencing a function where i'm calling and passing 
        this.setState({
            currentItem: {
                marked: "false",
                itemText: ""
            }
        });
    } 

    render(){
        return(
            
                <form action="" onSubmit={this.handleSubmit}>
                <input type="text" name="itemText" placeholder="Add Item" onChange = {this.handleChange} value={this.state.currentItem.itemText} ref = 'inputfield' />
                <button disabled={!this.state.currentItem.itemText}>add</button>
                </form>
        )

    } //render end  
} //ListForm component ends

//was dummy component, can change back if we need to
class ListItem extends React.Component{
    constructor(props){
        super(props);
      

    }

    render() {
    return (

        <li>
            {this.props.complete === true ? 
                <span className="strike" onClick={() => this.props.mark(this.props.itemIndex, this.props.data.key)}> {this.props.item}
            </span> :  
            <span onClick = {()=> this.props.mark(this.props.itemIndex, this.props.data.key)}>
                {this.props.item}
            </span> 
            }
            <button onClick={() => this.props.remove(this.props.data.key)}>
            <i class="fa fa-times-circle-o" aria-hidden="true"></i>
            </button>
        </li>
 
        
        //onClick is going to use the arrow funciton as the CB functino, and the arrow function will CALL the remove method and pass in that value. when this component loads, its not called right away, the method is not called right away but put into the arrow functino and used as the CB

    )
}
}


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
  //put the new list item on the page in the existing <ul>


  