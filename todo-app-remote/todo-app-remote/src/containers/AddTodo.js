import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


const AddTodo = ({ dispatch }) => {
  return (
    <div className="AddTodo">
      <form onSubmit={e => {
        e.preventDefault()
        const input = document.querySelector('input[name=todo]')
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
       }}>
            <h1>Todos</h1> 
        <Input className="TodoText" placeholder='Add new task..' name='todo' />
        <Button className="TodoButton" basic type='submit'>
            add todo
        </Button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo;

