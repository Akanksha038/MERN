//ye kisis bhi list ko uthakar de dega
// const list = () => {

//   const arr = ["Apple", "Orange", "Banana", "Banana", "Guvawa"];
//   return (
//     <>

//       <h1> -----------With Map-------------</h1>
//       {/* //with map */}
//       <ol>
//         {arr.map(names => <li>{names} </li>)}
//       </ol>

//       <h1> -----------Without Map-------------</h1>

//       {/* //without map */}
//       <ol className="list-disc ml-10 mt-5 text-3xl">

//         <li >Apple</li>
//         <li >Orange</li>
//         <li >Banana</li>
//         <li >Banana</li>
//         <li >Guvawa</li>
//       </ol>
//     </>

//   );

// };

// export default list;




//aab kahi external dusri file se list ya array ko lenge



const list = ({ list }) => {
  if (!list) {
    return <h1>Array List is empty</h1>
  }

  return (
    <>

      <h1> -----------With Map-------------</h1>
      <ol>
        {list.map(item => <li>{item} </li>)}
      </ol>

    </>


  );

};


export default list;
