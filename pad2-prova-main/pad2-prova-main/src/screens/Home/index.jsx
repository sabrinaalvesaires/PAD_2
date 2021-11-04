import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TodoList } from '../../components/TodoList'
import { addTodo } from '../../store/modules/todos/actions'

import {Container, Header, HeaderText, AddForm, AddFormTitle, ContentInput, SubmitButton, SubmitButtonText} from './styles'

export function Home() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  
  const [content, setContent] = useState('')
  
  function createTodo() {
    dispatch(addTodo({ title: todos.length, content }))
  }
  
  return (
    <Container>
      <Header>
        <HeaderText>Aplicativo ToDo list</HeaderText>
      </Header>

      <AddForm>
        <AddFormTitle>Adicione aqui uma tarefa</AddFormTitle>
        
        <ContentInput placeholder="tarefa" onChangeText={(e) => setContent(e)} />

        <SubmitButton onPress={createTodo}>
          <SubmitButtonText>ADICIONAR TAREFA</SubmitButtonText>
        </SubmitButton>
      </AddForm>

      <TodoList />
    </Container>
  )
}