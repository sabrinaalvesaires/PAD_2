import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { Container, Header, Title, Content } from './styles'

import menuImg from '../../assets/storage.png'
import closeImg from '../../assets/close.png'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../../store/modules/todos/actions'
import { useNavigation } from '@react-navigation/core'


function Todo({ todo }) {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  function remove() {
    dispatch(removeTodo(todo.id))
  }

  function redirecionar() {
    navigation.navigate('Detail', { todo })
  }

  return (
    <Container onPress={redirecionar}>
      <Header>
        <Image source={menuImg} />

        <Title>Tarefa#{todo.title}</Title>

        <TouchableOpacity onPress={remove}>
          <Image source={closeImg} />
        </TouchableOpacity>
      </Header>

      <Content>{todo.content}</Content>
    </Container>
  )
}

export { Todo }