import styled from 'styled-components'
import service from '../../service'
import TodoItem from '../Todoitem'

const TodoList = ({todos, setTodos}) => {

  const deleteTask = async (_id) => { 
    return await service.task.deleteTask(_id)
  }

  const deleteHandler = async _id => { // todo 삭제
    const result = await deleteTask(_id)
    const {success} = result;
    if(success){ // 삭제 성공하면  
      const result2 = todos.filter(todo => todo._id !== _id )
      setTodos(result2)
    }
  }
  
  const completeTask = async (_id, completed) => {
    const result = await service.task.completeTask(_id, completed)
    return result;
  }

  const completeHandler = async (_id, completed) => { // todo 완료
    const result = await completeTask(_id, !completed)
    
    const {success, data} = result;

    if (success) { // 
      // const tasks = await service.task.fetchAllTasks() // todo completed하면 목록 새로 불러오기
      // setTodos(tasks.data)
      const result2 = todos.map(todo => {
        if (todo._id === _id) {
          return {
            ...todo,
            completed: data.completed,
          }
        }
        return todo
      })
      setTodos(result2)
    } else { }
  }

  return <Style>
    {todos.map((todo) => {
      return (
        <TodoItem {...todo} key={todo._id} deleteHandler={deleteHandler} completeHandler={completeHandler}/>
      )
    })}
  </Style>
}

const Style = styled.div`
  
`

export default TodoList