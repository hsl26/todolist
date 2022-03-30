import styled from 'styled-components'
import TodoItem from '../Todoitem'

const TodoList = ({todos}) => {
  return <Style>
    {todos.map((todo) => {
      return (
        <TodoItem todo={todo} key={todo.uuid}/>
      )
    })}
  </Style>
}

const Style = styled.div`
  
`

export default TodoList