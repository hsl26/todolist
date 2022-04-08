import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoInput from './components/TodoInput';
import TodoHeader from './components/TodoHeader';
import TodoButton from './components/TodoButton';
import TodoList from './components/TodoList';
import service from './service';

function App() {
  const [ value, setValue ] = useState("")
  const [ todos, setTodos ] = useState([ ])

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ age, setAge ] = useState('')

  const [ email2, setEmail2 ] = useState('')
  const [ password2, setPassword2 ] = useState('')

  const [ user, setUser ] = useState(null)
  const isLogin = user ? true : false

  const [ r, setR ] = useState(null)
  const isregister = r ? true : false

  const onChangeHandler = event => {
    setValue(event.target.value)
  }

  const signupHandler = async () => {
    await service.user.signup({ name, email, password, age })
  }

  const loginHandler = async () => {
    const result = await service.user.login({ email: email2, password: password2 })
    setUser(result)
  }

  const register = () => {
    setR(!r)
  }

  const logoutHandler = async () => {
    const result = await service.user.logout()
    setUser(!result)
  }

  const fetchAllTasks = async () => {
    const tasks = await service.task.fetchAllTasks()
    setTodos(tasks.data)
  }

  useEffect(() => {
    if(isLogin){
      fetchAllTasks()
    }
  }, [isLogin])

  const onClickHandler = async () => {
    const computedValue = value.trim()
    if (computedValue === '') {
      return 
    } 
    const result = await service.task.addTasks(value)
    setTodos(prev => {
      return [
        ...prev,
        { ...result.data }
      ]
    }) 
    setValue('') 
  }

  return (
    <AppStyle>
      {
        isLogin ? 
          <div className="wrapper">
            <div className='inner-wrapper'>
              <TodoHeader/>
              <div className='input-area'>
                <TodoInput placeholder="할 일을 입력하세요" value={value} onChangeHandler={onChangeHandler}  ></TodoInput>
                <TodoButton value={value} onClickHandler={onClickHandler} disabled={value.trim() === ''}>
                  추가하기
                </TodoButton>
              </div>
              <TodoList todos={todos} setTodos={setTodos}/>
              <br/>
              <TodoButton onClickHandler={logoutHandler}>로그아웃</TodoButton>
            </div>
            
          </div>
        :
        !isregister ? 
          <div className="wrapper2"> 
            <TodoInput  value={email2} 
                        type='text'
                        onChangeHandler={e=>{setEmail2(e.target.value)}}
                        placeholder="메일을 입력해주세요" />
            <TodoInput  value={password2} 
                        type='password'
                        onChangeHandler={e=>{setPassword2(e.target.value)}}
                        placeholder="비밀번호를 입력해주세요" />        
            <TodoButton onClickHandler={loginHandler}>로그인</TodoButton> 

            <button onClick={register}>회원가입</button>
          </div>
          :
          <div className="wrapper2">
            <TodoInput  value={name} 
                        type='text'
                        onChangeHandler={e=>{setName(e.target.value)}}
                        placeholder="이름을 입력해주세요" />
            <TodoInput  value={email} 
                        type='text'
                        onChangeHandler={e=>{setEmail(e.target.value)}}
                        placeholder="메일을 입력해주세요" />
            <TodoInput  value={password} 
                        type='password'
                        onChangeHandler={e=>{setPassword(e.target.value)}}
                        placeholder="비밀번호를 입력해주세요" />
            <TodoInput  value={age} 
                        type='text'
                        onChangeHandler={e=>{setAge(e.target.value)}}
                        placeholder="나이을 입력해주세요" />    
            <TodoButton onClickHandler={/*() => {*/signupHandler/*(); register()}*/}>회원가입</TodoButton>
          </div>
      }
                         
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
  .wrapper2 {
    width: 768px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:10px;
  }
`

export default App;
