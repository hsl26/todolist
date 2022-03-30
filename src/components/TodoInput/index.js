import styled from 'styled-components'

const TodoInput = ({ value, onChangeHandler }) => {
    return <Style>
        <input
            className='input'
            type="text"
            value={value}
            onChange={onChangeHandler}
            placeholder="할 일을 입력하세요" 
        />
    </Style>
}

const Style = styled.div`
    width: 230px;
    height: 40px;
    .input {
        width: 230px;
        height: 40px;
        border: none;
        background-color: rgba(0, 0, 0, 0.03);
        font-size: 16px;
        box-sizing: border-box;
        padding: 0 0 0 13px;
    }
    margin-bottom: 8px;
`

export default TodoInput