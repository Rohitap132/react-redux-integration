// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Greet from './Components/Greet';
// import Hello from './Components/Hello';
// import Form from './Components/Form';
// import Welcome from './Components/Welcome';
// import Register from './Components/Register';
// import pic from './logo192.png';
// import pot from './logo512.png';
// import Message from './Components/Message';
// import Counter from './Components/Counter';
// import HookCounter1 from './Components/HookCounter1';
// import HookCounter2 from './Components/HookCounter2';
// import Discount from './Components/Discount';
// import EventBind from './Components/EventBind';
// import UserGreeting from './Components/UserGreeting';
// import NameList from './Components/NameList';
// import PostList from './Components/PostList';
// import HookCounter3 from './Components/HookCounter3';
// import HookCounter4 from './Components/HookCounter4';


// function App() {
//   return (
    
//       <div className='App'>
//         {/* <Welcome firstname="Rohit" lastName="Pillai"></Welcome>
//         <Welcome firstname="Ayush" lastName="Chandak"></Welcome> */}

//         {/* <Greet firstName="Rohit " lastname="Pillai"></Greet> */}
//         {/* <Greet firstName="Ayush"></Greet>
//         <Greet firstName="Harish"></Greet> */}
//         {/* <Greet empid={1}  ename="fgh">
//         <p>this is children props</p>
//         </Greet>
//         <Greet empid="123"  /> */}

//         {/* <Greet></Greet> */}
//         {/* <Register name="Neha" na={20} picture={pic} dpt="AIML"/>
//         <Register name="Rohit" na={21} picture={pot} dpt="AEROSPACE"/>
//         <Register/> */}
//         {/* <Message></Message> */}
//         {/* <Counter></Counter> */}
//         {/* <HookCounter1/>
//         <hr/>
//         <HookCounter2 number={5}/> */}
//         {/* <Discount></Discount> */}
//         {/* <EventBind></EventBind> */}
//         {/* <UserGreeting loggedIn={true}/> */}
//         {/* <PostList></PostList> */}
//         {/* <HookCounter3/> */}
//         <Form/>



        
//       </div>

//   );
// }

// export default App;

import {Provider} from 'react-redux';
import store from './redux/store';


import React from 'react';
// import CakeContainer from './redux/CakeContainer';
// import IcecreamContainer from './redux/IcecreamContainer';
// import ItemContainer from './redux/ItemContainer';
import UserContainer from './redux/UserContainer';


function App(){
return(
    <Provider store ={store}>
        <div>
            {/* <CakeContainer/>
            <IcecreamContainer/>
            <ItemContainer/>
            <ItemContainer cake/> */}
            <UserContainer/>
        </div>
    </Provider>
)
}
export default App;
