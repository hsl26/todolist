import styled from 'styled-components'
// import React, { useState } from "react";

const TodoItem = props => {

    const deleteToggle = () => {
        props.deleteHandler(props.uuid, props.isDeleted)
        console.log(props.isDeleted)
    }

    const completeToggle = () => {
        props.completeHandler(props.uuid, props.isCompleted)
        console.log(props.isCompleted)
    }

    return <Style isCompleted={props.isCompleted} isDeleted={props.isDeleted} >
        <div className='left' >
            { !props.isDeleted && <div className = 'check' onClick = { completeToggle } >
                <div className='circle'>
                    { props.isCompleted && <div className='f_circle' />}
                </div>
            </div>}
            <div className='text'>
                {props.text}
            </div>
        </div>
        <div className='right' onClick={ deleteToggle } >
            {props.isDeleted ? '복구' : '삭제'}
        </div>
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
            border-radius: 20px;
            margin-left: 12px;
            .f_circle {
                width: 14px;
                height: 14px;
                background-color: #426EFF;
                border-radius: 16px;
                margin: 2px;
            }
        }
        
        .text {
            margin-left: ${ ({isDeleted}) => isDeleted ? 48 : 16}px;
            color: ${ ({isCompleted, isDeleted}) => (isDeleted || isCompleted) ? '#00000040' : '#000000' };
            text-decoration: ${ ({isDeleted}) => isDeleted ? 'line-through' : 'none' };
        }
    }
    
    .right {
        margin-right: 12px;
        font-size: 14px;
        color: ${ ({isDeleted}) => isDeleted ? '#0000FF':'#FF0000'};
    }
`

export default TodoItem