import styled from "styled-components"
import { useState, useEffect } from 'react';
import TodoInput from "../components/TodoInput";
import TodoHeader from '../components/TodoHeader';
import TodoButton from '../components/TodoButton';
import TodoList from '../components/TodoList';
import service from "../service";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../state/state";

const Todo = () => {
    const getLoginUser = async () => { 
        try {
          await service.user.logged();
        } catch (e) {
          console.log(e);
        }
    }

    const navigate = useNavigate()
    const setLogin = useSetRecoilState(userState);

    const [ value, setValue ] = useState("") // todolist 입력창 내용 
    const [ todos, setTodos ] = useState([ ]) // todo

    useEffect(() => { 
        getLoginUser();
        fetchAllTasks();
    },[])

    const fetchAllTasks = async () => { // todo 목록 불러오기
        const tasks = await service.task.fetchAllTasks()
        setTodos(tasks.data)
    }

    const onChangeHandler = event => { // 
        setValue(event.target.value)
    }

    const onClickHandler = async () => { // todo 목록에 추가
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
        setValue('') // todo 입력창 초기화
    }
    const logoutHandler = async () => { // 로그아웃
        await service.user.logout()
        setLogin(false)
        navigate('/login')
    }
    
    const withdrawHandler = async () => { // 회원탈퇴
        await service.user.withdraw()
        alert('회원 탈퇴가 완료되었습니다.')
        navigate('/login')
    }

    const onKeyPress = e => { // 엔터치면 버튼 작동
        if(e.key === 'Enter') onClickHandler()
    }

    return <Style>
        <div className="wrapper">
            <div className='inner-wrapper'>
                <TodoHeader/>
                <div className='input-area'>
                    <TodoInput placeholder="할 일을 입력하세요" value={value} onChangeHandler={onChangeHandler} onKeyPress={e=>onKeyPress(e)} ></TodoInput>
                    <TodoButton onClickHandler={onClickHandler} disabled={value.trim() === ''}>추가하기</TodoButton>
                </div>
                <TodoList todos={todos} setTodos={setTodos}/>
                <br/>
                <TodoButton onClickHandler={logoutHandler}>로그아웃</TodoButton>
                <br/>
                <br/>
                <Link to="/">home으로 이동</Link>
            </div>
            <p className="gotowithdraw" onClick={withdrawHandler}>회원탈퇴</p>
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
    .gotowithdraw {
        font-size:10px;
        color:white;
        text-decoration: underline;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

export default Todo