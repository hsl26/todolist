import styled from 'styled-components'
// import State from './right'
import React, { useState } from "react";


const TodoItem = ({onClick, todo}) => {
    const [p, setP] = useState(true);
    const [dor, setDor] = useState( "삭제" );
    const [color, setColor] = useState( true );
    const [tcolor, seTcolor] = useState( 0 );
    const [checked, setChecked] = useState (false);

    const Restore = () => {
        if( dor === "삭제" ) {
            setDor( "복구" );
            setColor(false);
            seTcolor(2);
            setP(false)
            // 체크 원 삭제
        } else {
            setDor( "삭제" );
            setColor(true);
            seTcolor(0);
            setP(true)
        }
    };

    const Checked = () => {
        if (checked === false) {
            setChecked( true );
            seTcolor(1);
        } else {
            setChecked( false );
            seTcolor(0);
        }
    }


    return <Style >
        <div className='left'>
            {p && <div className = 'check' onClick = { Checked } >
                <div className='circle'>
                    { checked && <div className='f_circle' /> }
                </div>
            </div>}
            <div className={tcolor===0 ? 'text' : (tcolor===1 ? 'text_f' : 'text_d')}>
                {todo.text}
            </div>
        </div>
        <div className={ color ? 'right' : 'right_2' } onClick={ Restore } >
            {dor}
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
            margin-left: 16px;
        }
        .text_f {
            margin-left: 16px;
            color: rgba(0, 0, 0, 0.4);
        }
        .text_d {
            margin-left: 48px;
            color: rgba(0, 0, 0, 0.4);
            text-decoration: line-through; /* text 가로 선 */
        }
    }
    
    .right {
        margin-right: 12px;
        font-size: 14px;
        color: #FF0000;
    }
    .right_2 {
        margin-right: 12px;
        font-size: 14px;
        color: #0000FF;
    }
`

export default TodoItem