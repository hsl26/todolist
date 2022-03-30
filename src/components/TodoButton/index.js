import styled from 'styled-components'


const TodoButton = ({ onClickHandler, children }) => {
    return <ButtonStyle className="btn-submit" onClick={onClickHandler}>
        { children }
    </ButtonStyle>
}

const ButtonStyle = styled.button`
    width:116px;
    height:40px; 
    background-color: rgba(0, 0, 0, 0.08);
    padding:none;
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