import styled from 'styled-components'
import TodoItem from '../Todoitem'

const TodoList = ({todos, setTodos}) => {

  const deleteHandler = uuid => {
    const result = todos.map(todo => {
      if (todo.uuid === uuid) {
        return {
          ...todo,
          isDeleted: !todo.isDeleted
        }
      }
      return todo
    })
    setTodos(result)
  }

  const completeHandler = uuid => {
    const result = todos.map(todo => {
      if (todo.uuid === uuid) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    })
    setTodos(result)
  }

  return <Style>
    {todos.map((todo) => {
      return (
        <TodoItem {...todo} key={todo.uuid} deleteHandler={deleteHandler} completeHandler={completeHandler}/>
      )
    })}
  </Style>
}

const Style = styled.div`
  
`

export default TodoList