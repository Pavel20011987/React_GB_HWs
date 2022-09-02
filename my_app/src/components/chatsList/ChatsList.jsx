
import List from '@mui/material/List'
import {
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
  selectChats,
  addChat,
  removeChat,
  loadChat,
  selectChatId,
} from '../../store/chatSlice'

const ChatsList = () => {
  const chats = useSelector(selectChats)
  const currentChatId = useSelector(selectChatId)
  const dispatch = useDispatch()

  const [addFormOpen, setFormVisibility] = useState(true)

  const selectChat = (id) => {
    if (!id) return
    dispatch(loadChat(id))
  }

  const openAddChatForm = () => {
    setFormVisibility(true)
  }

  const closeAdd = (e, isAdd) => {
    e.preventDefault()
    if (isAdd) {
      let chatName = e.target.form.chatName.value
      dispatch({type:addChat.type, payload: chatName, meta: {delay:1500}})
    }
    setFormVisibility(false)
  }

  const renderAddChat = () => {
    if (!addFormOpen) {
      return (
        <ListItemButton onClick={openAddChatForm}>
          <AddIcon />
          Add Chat
        </ListItemButton>
      )
    }
    return (
      <form>
        <input id="chatName" type="text" />
        <button onClick={(e) => closeAdd(e, true)}>Add</button>
        <button onClick={closeAdd}>Close</button>
      </form>
    )
  }

  return (
    <List sx={{ bgcolor: 'background.paper' }}>
      {chats.map((chat, index) => (
        <ListItem key={chat.id} selected={chat.id === currentChatId}>
          <ListItemButton onClick={() => selectChat(chat.id)}>
            <ListItemText primary={chat.header} />
            <CommentIcon />
          </ListItemButton>
          <IconButton onClick={(e) => dispatch(removeChat(chat.id))}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
      {renderAddChat()}

import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

const ChatsList = ({chats}) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {chats.map((chat) => (
        <ListItem
          key={chat.id}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={chat.header} />
        </ListItem>
      ))}

    </List>
  )
}

export default ChatsList