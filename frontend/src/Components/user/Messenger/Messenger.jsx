import React, { useState, useEffect, useRef } from 'react'
import ChatOnline from '../ChatOnline/ChatOnline'
import Conversation from '../conversations/Conversation'
import Message from '../Message/Message'
import "./Messenger.css"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
function Messenger() {
    const dispatch = useDispatch()

    const [converstions, setConverstions] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const scrollRef = useRef()


    const { user, loading: userLoading } = useSelector((state) => state.user);


    useEffect(() => {
        const getConversations = async () => {
            try {
                const { data } = await axios.get(`/api/v1/conversation/${user._id}`)
                setConverstions(data)
            } catch (err) {
                console.log(err);
            }

        }
        getConversations()
    }, [user._id])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const { data } = await axios.get(`/api/v1/message/${currentChat?._id}`)
                setMessages(data)
            } catch (err) {
                console.log(err);

            }
        }
        getMessages()
    }, [currentChat])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        }
        try {
            const { data } = await axios.post(`/api/v1/message`, message)
            setMessages([...messages, data])
            setNewMessage("")

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[messages])



    return (
        <div className="body-messager pt-2 ">
            <div className='messenger  container'>
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput" />
                        {converstions.map((c) => (
                            <div onClick={() => setCurrentChat(c)}>
                                <Conversation conversation={c} currentUser={user} />
                            </div>
                        ))}

                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ?
                            <>
                                <div className="chatBoxTop">
                                    {messages.map(m => (
                                        <div ref={scrollRef}>
                                            < Message message={m} own={m.sender === user._id} />
                                        </div>
                                    ))
                                    }

                                </div>
                                <div className="chatBoxBottom">
                                    <textarea
                                        className="chatMessageInput"
                                        placeholder='write something...'
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessage}
                                    >

                                    </textarea>

                                    <button className="chatSubmitButton" onClick={handleSubmit}>
                                        Send
                                    </button>
                                </div>
                            </>
                            : <span className='noConversationText'>Open a conversation to start a chat.</span>
                        }
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger