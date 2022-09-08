import "./App.css";
import { Route, Routes } from "react-router-dom";
import Site from "./pages/Site";
import SiteLayout from "./Layouts/SiteLayout";
import Chat from "./pages/Chat";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Counter from "./pages/Counter";
import Galery from "./pages/Galery";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AuthLayout from "./Layouts/AuthLayout";
import Contacts from "./pages/Contacts";
import Contact from "./pages/Contact";


import { useState, useEffect, useCallback, useRef } from "react";
import MessagesList from "./components/messagesList/MessagesList";
import Tasks from "./components/tasks/Tasks";
import "./App.css";
import MessageForm from "./components/messageForm/MessageForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ChatsList from "./components/chatsList/ChatsList";
import { TextField } from "@mui/material";

const botMessage = { author: "Bot", body: "" };

const theme = createTheme({
    spacing: [0, 4, 8, 16],
    components: {
        MuiButton: {
            defaultProps: {
                size: "big",
                variant: "contained",
                margin: "dense",
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: "filled",
                size: "small",
            },
        },
        MuiStack: {
            defaultProps: {
                spacing: 1,
            },
        },
    },
});

function App() {

  return (

    <ThemeProvider theme = { theme } >
        <Routes>
        <Route path = { "/" } element = {<AuthLayout/>}>
        <Route path = { "/" } element = {<SiteLayout/>}>
        <Route index element={< Site />} />
        <Route path={"/profile"} element={< Profile />} />
        <Route path={"/counter"} element={< Counter />} />
        <Route path={"/galery"} element={< Galery />} />
        <Route path={"/login"} element={< SignIn />} />
        <Route path={"/register"} element={< SignUp />} />
        <Route path={"/contacts"} element={< Contacts />} />
        <Route path={"/contact/:id"} element={< Contact />} />
        </Route>
        <Route path={"/chat"} element={< Chat />} />
        </Route>
        <Route path={"*"} element={< NotFound />} />
      </Routes>
    </ThemeProvider>
    );

    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={"/"} element={<SiteLayout />}>
          <Route index element={<Site />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/counter"} element={<Counter />} />
          <Route path={"/galery"} element={<Galery />} />

    return ( <
        ThemeProvider theme = { theme } >
        <Routes>
        <Route path = { "/" } element = { <SiteLayout/> } >
        <Route index element = { < Site/> }/>
          <Route path = { "/profile" } element = { < Profile/> }/>
          <Route path = { "/counter" } element = { < Counter/> }/>

        </Route>
        <Route path={"/chat"} element={<Chat />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>

    </ThemeProvider>
  );

          </ThemeProvider>
    );
  const [currentUser, setCurrentUser] = useState("John");
  const [messageList, setMessageList] = useState([]);
  const [chatsList] = useState([
    {
      id: 1,
      header: "some header",
      messages: [],
    },
    {
      id: 2,
      header: "some header2",
      messages: [],
    },
    {
      id: 3,
      header: "some header3",
      messages: [],
    },
  ]);
  const [idCounter, setIdCounter] = useState(0);
  const formRef = useRef(null);

  const getNewId = useCallback(() => {
    const newId = idCounter + 1;
    setIdCounter(newId);
    return newId;
  }, [idCounter]);

  const addMessage = useCallback(
    (newMessage) => {
      setMessageList([...messageList, { ...newMessage, id: getNewId() }]);
    },
    [getNewId, messageList]
  );


  const botSendMessage = useCallback(
    (messages) => {
      if (messages.length === 0) return;
      const lastMessage = messages.at(-1);
      if (lastMessage.author === botMessage.author) return;
      addMessage({ ...botMessage, body: `${lastMessage.author} write in chat` });
      formRef.current.focus();
    },
    [addMessage]
  );

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={"/"} element={<SiteLayout />}>
          <Route index element={<Site />} />
          <Route path={"/profile"} element={<Profile />} />
        </Route>
        <Route path={"/chat"} element={<Chat />} />
        <Route path={"/chat/:chatId"} element={<Chat />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );



    return (


  useEffect(() => {
    setTimeout(() => botSendMessage(messageList), 1500);
  }, [messageList, botSendMessage]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Tasks />

        <div className="chat">
          <div className="side">
            <div className="chat-user">
              <TextField type="text" label="Current User" value={currentUser} onChange={(e) => setCurrentUser(e.target.value)} />
            </div>


            <ChatsList chats={chatsList} />
          </div>

          <div className="chat-group">
            <MessagesList messages={messageList} currentUser={currentUser} />

            <MessageForm onMessageSend={addMessage} ref={formRef} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );

    const name = 'Pavel';
    return ( 
<div>
        <Message name = { name }/>  
 </div>
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        < p >
        Edit < code > src / App.js < /code> and save to reload. </p >
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React < /a>  
        </header>  </div>
    );



}

export default App;