// import React from 'react';
// import firebase from 'firebase'

//create form to take user input title for list
//on submit, send title to firebase to create new node
//on submit, create new list for user
//when user adds item to list, send list items to node in firebase and store

// // export default class List extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             userTitle:""
//         } 
//         this.getTitle = this.getTitle.bind(this);
//         // this.handleChange = this.handleChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//     }


// // //method to get title
// getTitle(e){
//     e.preventDefault();
//     console.log("I am getTitle Method")

//     const title = e.target.value;
//     console.log(title);
//     this.setState ({
//         userTitle: title
//     });
// }

// handleChange(e){
//     e.preventDefault();
//     console.log("I'm the handlesubmit")
//     this.state({
//        userTitle: e.target.value
//     })
// }
//     // handleChange(e){
//     //     console.log(titleVar)
//     //         // let titleVar = this.state.userTitle;
//     //        const titleVar= e.target.value
//     //         this.setState({
//     //             userTitle: titleVar
//     //         })
//     // }

//     // handleSubmit(e) {
//     //     e.preventDefault();
//     //     console.log("I am the handlesubmit" + userTitle)
//     //     this.state({
//     //         userTitle: e.target.value
//     //     })
//     //     //FIREBASE //
//     //     const dbRef = firebase.database().ref();
//     //     dbRef.push(titleVar)
//     //     console.log(titleVar)
              
//     // }

//     render(){
//         return(
//             <div>
//                 <h1>Create List</h1>
//                 <form action="" >
//                     <input type="text" placeholder="List Title"  onChange={this.getTitle} name="" id="" />
//                     <button type = "submit">add List</button>
//                 </form>
//                 <div className="toDoList">
//                     <ul>
//                     {/* <list item props go here */}
//                     </ul>
//                 </div>
//             </div>
//         )
//     } 

// }
