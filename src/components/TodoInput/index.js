import styled from 'styled-components'

const TodoInput = ({ placeholder, type, value, onChangeHandler, onKeyPress }) => {
    return <Style>
        <input  className='input'
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder} 
                onKeyPress={onKeyPress} />
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