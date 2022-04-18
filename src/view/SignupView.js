import styled from "styled-components"
import { useState } from 'react';
import TodoInput from "../components/TodoInput";
import TodoButton from '../components/TodoButton';
import service from "../service";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate()
    // 회원가입
    const [ name, setName ] = useState('이현수')
    const [ email, setEmail ] = useState('gustn26@gmail.com')
    const [ password, setPassword ] = useState('1234567')
    const [ age, setAge ] = useState('22')

    const signupHandler = async () => { // 회원가입
        try{
          await service.user.signup({ name, email, password, age })
          alert('회원가입이 완료되었습니다.')
          navigate('/login')
        } catch (error){
            alert('이미 등록된 회원이거나 입력내용이 양식에 맞지 않습니다.')
            setName('')
            setEmail('')
            setPassword('')
            setAge('')
        }
    }

    const onKeyPress = e => { // 엔터치면 버튼 작동, 3가지 경우
        if(e.key === 'Enter') signupHandler()
    }

    return <Style>
        <div className="wrapper"> {/* signup */}
            <TodoInput  value={name} 
                        type='text'
                        onChangeHandler={e=>{setName(e.target.value)}}
                        placeholder="이름을 입력해주세요" 
                        onKeyPress={e=>onKeyPress(e)} />
            <TodoInput  value={email} 
                        type='text'
                        onChangeHandler={e=>{setEmail(e.target.value)}}
                        placeholder="메일을 입력해주세요" 
                        onKeyPress={e=>onKeyPress(e)} />
            <TodoInput  value={password} 
                        type='password'
                        onChangeHandler={e=>{setPassword(e.target.value)}}
                        placeholder="비밀번호를 입력해주세요" 
                        onKeyPress={e=>onKeyPress(e)} />
            <TodoInput  value={age} 
                        type='text'
                        onChangeHandler={e=>{setAge(e.target.value)}}
                        placeholder="나이을 입력해주세요" 
                        onKeyPress={e=>onKeyPress(e)} />    
            <TodoButton onClickHandler={signupHandler} disabled={name.trim() === ''||email.trim() === ''||password.trim() === ''||age.trim() === ''} >회원가입</TodoButton>
            <Link to='/login'>로그인페이지로이동</Link>
            <Link to="/">home으로 이동</Link>
        </div>
    </Style>
}

const Style = styled.div`
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
        padding-top:10px;
    }
`

export default Signup