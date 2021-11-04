import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../../store/modules/todos/actions'

import { Container, Header, HeaderText, Main,Title,Content, DeleteButton,EditButton, ButtonsText } from './styles'

export function Detail({ route }) {
  const { todo } = route.params

  const dispatch = useDispatch()
  const navigation = useNavigation()

  function remove() {
    dispatch(removeTodo(todo.id))
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <HeaderText>Aplicativo ToDo list</HeaderText>
      </Header>
      
      <Main>
        <Title>Tarefa#{todo.title}</Title>
        <Content>{todo.content}</Content>
      </Main>

      <EditButton>
        <ButtonsText>EDITAR TAREFA</ButtonsText>
      </EditButton>

      <DeleteButton onPress={remove}>
        <ButtonsText>REMOVER TAREFA</ButtonsText>
      </DeleteButton>
    </Container>
  )
}