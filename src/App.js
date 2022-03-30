// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import TodoInput from './components/TodoInput';
import TodoHeader from './components/TodoHeader';
import TodoButton from './components/TodoButton';
import TodoList from './components/TodoList';



function App() {
  const [ value, setValue ] = useState("")
  const [ todos, setTodos ] = useState([  
    {
      uuid: 0,
      text: '해야할 일 A',
      isCompleted: true,
      isDeleted: true,
    },
    {
      uuid: 1,
      text: '해야할 일 B',
      isCompleted: false,
      isDeleted: false,
    }
  ]) 

  const [ count, setCount ] = useState(2)

  const onChangeHandler = event => {
    console.log(event.target.value)
    setValue(event.target.value) // 우리 눈에 보이게 함
  }

  const onClickHandler = event => {
    const computedValue = value.trim()
    if (computedValue === '') {
      alert('공백은 입력할 수 없습니다')
      return 
    }

    setTodos(prev => {
      return [
        ...prev,  // 레퍼런스에 대한 오류??를 막기위해 해체(...prev)했다가 다시 value
        { 
          uuid: count,
          text: value,
          isCompleted: false,
          isDeleted: false,
        }
      ]
    }) 

    setCount(prev => prev + 1)

    setValue("") // 초기화
  }

  return (
    <AppStyle>
      <div className="wrapper">
        <div className='inner-wrapper'>
          <TodoHeader/>
          <div className='input-area'>
            <TodoInput value={value} onChangeHandler={onChangeHandler}></TodoInput>
            <TodoButton onClickHandler={onClickHandler}>
              추가하기
            </TodoButton>
          </div>

          <TodoList todos={todos}/>
        </div>
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
    justify-content: center;
    .inner-wrapper {
      width: 354px;
      .input-area {
        display: flex;
        justify-content: space-between;
        border:1px;
      }
    }
  }
`

export default App;
