
import './App.css';
import Box from './component/Box';

const choice = { 
  rock :{
    name : "Rock",
    img :"https://blog.kakaocdn.net/dn/bxgNpX/btqAHJcdNng/F9ZIdJ0idpvasVCXUsAqx0/img.png",
  },
  scissors : {
    name : "Scissors",
  },
  paper:{
    name : "Paper",
    img:"https://t1.daumcdn.net/cfile/tistory/2509BA3F57358C8D09",
  },
}

function App() {
  const play=(userChoice)=>{
    console.log("선택됌",userChoice);
  }
  return (
    <div>
      <div className="main">
       <Box title="You"/>
       <Box title="Computer"/>
      </div>
      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
