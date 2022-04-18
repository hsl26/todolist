import styled from 'styled-components'


const TodoButton = ({ onClickHandler, children, disabled }) => {
    return <ButtonStyle className="btn-submit" onClick={onClickHandler} disabled={disabled}>
        { children }
    </ButtonStyle>
}

const ButtonStyle = styled.button`
    width:116px;
    height:40px; 
    background-color: ${ ({disabled}) => disabled ? '#00000020' : '#426EFF'} ;
    color: white;
    font-weight:bold;
    font-size: 16px;
    border: none;
    .btn-submit {
        width:56px;
        height:19px;
    }
    margin-bottom: 8px;
`

export default TodoButton