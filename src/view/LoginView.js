import styled from "styled-components"
import { useState } from 'react';
import TodoInput from "../components/TodoInput";
import TodoHeader from '../components/TodoHeader';
import TodoButton from '../components/TodoButton';
import service from "../service";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../state/state";

const Login = () => {
    const navigate = useNavigate()
    const setLogin = useSetRecoilState(userState);
    // 로그인
    const [ email2, setEmail2 ] = useState('gustn26@gmail.com')
    const [ password2, setPassword2 ] = useState('1234567')

    const loginHandler = async () => { // 로그인
        try{
            await service.user.login({ email: email2, password: password2 })
            setLogin(true)
            setEmail2('') 
            setPassword2('')
            navigate('/todo')
        } catch (error){
            setLogin(false)
            alert('메일 또는 비밀번호를 잘못 입력했습니다.')
        }
    }

    const onKeyPress = e => { // 엔터치면 버튼 작동
        if(e.key === 'Enter') loginHandler()
    }

    return <Style>
        <div className="wrapper"> {/* login */}
            <TodoHeader/>
            <TodoInput  value={email2} 
                        type='text'
                        onChangeHandler={e=>{setEmail2(e.target.value)}}
                        placeholder="메일을 입력해주세요" 
                        onKeyPress={e=>onKeyPress(e)} />
            <TodoInput  value={password2} 
                        type='password'
                        onChangeHandler={e=>{setPassword2(e.target.value)}}
                        placeholder="비밀번호를 입력해주세요" 
                        onKeyPress={e=>onKeyPress(e)} />
            <TodoButton onClickHandler={loginHandler} disabled={ email2.trim() === '' || password2.trim() === '' } >로그인</TodoButton>
            <Link to="/signup">회원가입하러가기</Link>
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
        .gotologin{
            font-size:10px;
            text-decoration: underline;
        }
    }
`

export default Login