import styled from 'styled-components';
import TodoHeader from './components/TodoHeader';
import { Link } from "react-router-dom";

function App() {
  return (
    <AppStyle>
      <div className="wrapper">

        <TodoHeader/>
        <Link to='/login'>로그인하러가기</Link>
        <Link to='/signup'>회원가입하러가기</Link>
      </div>
    </AppStyle>
  );
}

const AppStyle = styled.div` 
  background-color: #000000; 
  display: flex;
  justify-content: center;
  width: 100%;
  height:100vh;
  .wrapper {
    width: 768px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default App;