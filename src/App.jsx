import { useEffect, useState } from 'react'
import './App.css'
// import Card from './Components/Card'
import Navbar from './Components/Navbar'
import TableElement from './Components/TableElement'
// import Student from './Components/Student'
// import NewCard from './Components/NewCard'
// import Logout from './Components/Logout'
// import Login from './Components/Login'
// import List from './Components/List'
// import Profession from './Components/Profession'
// import Test from './Components/Test'
// import MouseEvent from './Components/MouseEvent'
// import OnPointerComponent from './Components/OnPointerComponent'
import FocusComponent from './Components/FocusComponent'
import TeaSet from './Components/TeaSet'
import TeaGathering from './Components/TeaGathering'

function App() {

  useEffect(() => {
    // alert("Welcome to the Website");
  });

  // const [name, setName] = useState("User");
  // const [count, setCount] = useState(0);
  // const IncrementCount = () => setCount(prev => prev + 1);

  // const DecrementCount = () => {
  //   setCount(prev => {
  //     if (prev === 0) {
  //       // alert("Count can't be negative");
  //       return prev;
  //     }
  //     return prev - 1;
  //   });
  // };

  // const setUserName = () => {
  //   setName("Bhavesh Krishan Garg");
  // };






  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // if (isLoggedIn) {
  //   return (
  //     <Logout />
  //   );
  // } else {
  //   return (
  //     <Login />
  //   );
  // }
  // if (!isLoggedIn) {
  //   return (
  //     // <>
  //     <div>
  //       <Login />
  //     </div >
  //     // </>
  //   );

  // }

  return (
    <>
      <Navbar />
      <TableElement />
      {/* <div className='design'> */}
      {/* <div className=''>{name}</div> */}
      {/* <p>I'm {name}</p> */}
      {/* <button onClick={setUserName}>Set Username</button> */}
      {/* </div> */}
      {/* <div> */}

      {/* <Card /> */}
      {/* </div > */}
      {/* <Student name= {name} age={29} isStudent={true} /> */}
      {/* <Student name={"Bhavesh"} age={29} isStudent={false} />
      <Student name={"Patrick"} age={40} isStudent={false} />
      <Student name={"Edward"} age={18} isStudent={true} />
      <Student /> */}
      {/* <NewCard >
        <div>
          <h1>My Name is Bhavesh Krishan Garg</h1>
          <p>Software Developer : SDE </p>
        </div>
      </NewCard >
      <NewCard children="HII Beta ii kaise ho"> */}
      {/* <h1>Hii </h1> */}
      {/* </NewCard > */}
      {/* <NewCard IncrementCount={IncrementCount} DecrementCount={DecrementCount} increment="Increment" decrement="Decrement" count={count} /> */}


      {/* <h1>Welcome to Website</h1> */}
      {/* {isLoggedIn ? <Logout /> : <Login />} */}
      {/* {isLoggedIn && <Logout />} */}
      {/* <List /> */}
      {/* <Profession /> */}

      {/* <Test /> */}
      {/* <MouseEvent /> */}
      {/* <OnPointerComponent /> */}
      <FocusComponent />
      <TeaSet />
      <TeaGathering />





    </>
  );
}
export default App;

