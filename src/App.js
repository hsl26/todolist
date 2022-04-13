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

  const [ email2, setEmail2 ] = useState('gustn26@gmail.com')
  const [ password2, setPassword2 ] = useState('1234567')

  const [ user, setUser ] = useState(null)
  const isLogin = user ? true : false

  const [ registered, setRegistered ] = useState(null)
  const isregister = registered ? true : false

  const onChangeHandler = event => {
    setValue(event.target.value)
  }

  const signupHandler = async () => {
    try{
      await service.user.signup({ name, email, password, age })
      alert('회원가입이 완료되었습니다.')
      register();
    } catch (error){
      alert('이미 등록된 회원입니다.')
      setName('')
      setEmail('')
      setPassword('')
      setAge('')
    }
  }

  const loginHandler = async () => {
    try{
      const result = await service.user.login({ email: email2, password: password2 })
      setUser(result)
      setEmail2('') 
      setPassword2('')
    } catch (error){
      alert('메일 또는 비밀번호를 잘못 입력했습니다.')
    }
  }

  const logoutHandler = async () => {
    const result = await service.user.logout()
    setUser(!result)
  }

  const withdrawHandler = async () => {
    const result = await service.user.withdraw()
    alert('회원 탈퇴가 완료되었습니다.')
    setUser(!result)
  }

  const register = () => {
    setRegistered(!registered)
    setName('')
    setEmail('')
    setPassword('')
    setAge('')
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

  const onKeyPress = (e, temp) => { 
    if(e.key === 'Enter') {
      if(temp==='login') loginHandler()
      else if(temp==='add') onClickHandler()
      else if(temp==='signup') signupHandler()
    }
  }

  return (
    <AppStyle>
      {
        isLogin ? 
          <div className="wrapper"> {/* todolist */}
            <div className='inner-wrapper'>
              <TodoHeader/>
              <div className='input-area'>
                <TodoInput placeholder="할 일을 입력하세요" value={value} onChangeHandler={onChangeHandler} onKeyPress={e=>onKeyPress(e, 'add')} ></TodoInput>
                <TodoButton onClickHandler={onClickHandler} disabled={value.trim() === ''}>추가하기</TodoButton>
              </div>
              <TodoList todos={todos} setTodos={setTodos}/>
              <br/>
              <TodoButton className="gotologout"onClickHandler={logoutHandler}>로그아웃</TodoButton>
            </div>
            <p className="gotowithdraw" onClick={withdrawHandler}>회원탈퇴</p>
          </div>
        :
        !isregister ? 
          <div className="wrapper2"> {/* login */}
            <TodoHeader/>
            <TodoInput  value={email2} 
                        type='text'
                        onChangeHandler={e=>{setEmail2(e.target.value)}}
                        placeholder="메일을 입력해주세요" />
            <TodoInput  value={password2} 
                        type='password'
                        onChangeHandler={e=>{setPassword2(e.target.value)}}
                        placeholder="비밀번호를 입력해주세요" 
                        onKeyPress={e=>onKeyPress(e, 'login')} />        
            <div>
              <TodoButton onClickHandler={loginHandler} disabled={ email2.trim() === '' || password2.trim() === '' } >로그인</TodoButton>
              &nbsp;&nbsp;
              <TodoButton onClickHandler={register} >회원가입</TodoButton>
            </div>          
            
          </div>
          :
          <div className="wrapper2"> {/* signup */}
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
                        placeholder="나이을 입력해주세요" 
                        onKeyPress={e=>onKeyPress(e, 'signup')} />    
            <TodoButton onClickHandler={signupHandler} disabled={name.trim() === ''||email.trim() === ''||password.trim() === ''||age.trim() === ''} >회원가입</TodoButton>
            <p className="gotologin" onClick={register}>로그인페이지로이동</p>
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
    .gotowithdraw {
      font-size:10px;
      color:white;
      text-decoration: underline;
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
  .wrapper2 {
    width: 768px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:10px;
    .gotologin{
      font-size:10px;
      text-decoration: underline;
    }
  }
`

export default App;
