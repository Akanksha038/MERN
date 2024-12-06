// import React from 'react';
// function App() {

//   const Array = [
//     { id: 1, todoText: "Buy Milk", todoDate: "4-Sept-2024" },

//     { id: 2, todoText: "Go to College", todoDate: "Weekday" },

//     { id: 3, todoText: "Exercise", todoDate: "Everyday" },

//   ]



//   // console.log("----------------------Starting Without using map-------------------");

//   // const todoItemsText = [];
//   // Array.forEach(item => {
//   //   const str = convertObjectToTodoText(item);
//   //   todoItemsText.push(str);
//   // });

//   // console.log(todoItemsText)
//   // console.log("---------------Ending Without using map-------------");





//   console.log("----------------------Starting With using map-------------------");

//   //anonymous funtion=> function whithout name 

//   // const todoItemsText = Array.map(function (Array) {
//   //   return Array.todoText;
//   // });


//   //arrow function
//   const todoItemsText = Array.map(Array => Array.todoText
//     //agar single return ho to ham return and statement dono hata sakte hai
//     // return Array.todoText;
//   );

//   console.log(todoItemsText)
//   console.log("---------------Ending With using map-------------");


//   return (
//     <></>

//   )

// }

// export default App;



// //////-----------MAP---------------
// import List from './components/list';

// function App() {
//   const arr = ["Apple", "Orange", "Banana", "Banana", "Guvawa"];

//   return (
//     <>
//       <h1>Learning Map </h1>
//       <List list={arr}></List>
//     </>
//   )
// };

// export default App;





//---------------Conditional Rendering

import List from './components/list';

function App() {
  let arr; //array list is empty

  //   const arr = ["Apple", "Orange", "Banana", "Banana", "Guvawa"];


  return (
    <>
      <h1>Learning Map </h1>
      <List list={arr}></List>
    </>
  )
};

export default App;

