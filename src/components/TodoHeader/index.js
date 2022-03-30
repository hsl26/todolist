import styled from 'styled-components'

const TodoHeader = () => {
    return <Style>
        <div className='head'>
            Todo List
        </div>
    </Style>
}

const Style = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    .head {
        width: 104px;
        height: 18px;
        font-size: 24px;
        font-weight:bold;
        margin:none;
    }
    margin-bottom: 48px;
    
`

export default TodoHeader