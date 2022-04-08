import styled from 'styled-components'

const TodoItem = props => {

    const deleteToggle = () => {
        props.deleteHandler(props._id)
    }

    const completeToggle = () => {
        props.completeHandler(props._id, props.completed)
    }

    return <Style completed={props.completed}>
        <div className='left' >
            <div className = 'check' onClick = { completeToggle } >
                <div className='circle'>
                    { props.completed && <div className='f_circle' />}
                </div>
            </div>
            <div className='text'>
                {props.description}
            </div>
        </div>
        <div className='right' onClick={ deleteToggle }>삭제</div>
        
    </Style>
}

const Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    box-shadow: 1px 1px 10px #E5E5E5;
    margin-top: 8px;
    .left {
        display: flex;
        .circle {
            width: 20px;
            height: 20px;
            box-sizing: border-box; 
            border: 1px solid rgba(0,0,0,0.2);
            border-radius: 50%;
            margin-left: 12px;
            .f_circle {
                width: 14px;
                height: 14px;
                border: none;
                background-color: #426EFF;
                border-radius: 50%;
                margin: 2px;
            }
        }
        .text {
            margin-left: 16px;
            color: ${ ({completed}) => (completed) ? '#00000040' : '#000000' };
        }
    }
    
    .right {
        margin-right: 12px;
        font-size: 14px;
        color: #FF0000;
    }
`

export default TodoItem