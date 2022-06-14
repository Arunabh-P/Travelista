import React, { useState, useEffect, useRef } from 'react'
import ChatOnline from '../ChatOnline/ChatOnline'
import Conversation from '../conversations/Conversation'
import Message from '../Message/Message'
import "./Messenger.css"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { io } from "socket.io-client"
import chatimg from "../../../../src/Images/chat4.png"
import walkingCouples from "../../../../src/Images/walkingCouples.gif"
import SendRoundedIcon from '@mui/icons-material/SendRounded';
function Messenger() {
    const [converstions, setConverstions] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const [arrivalMessage, setArrivalMessage] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState(null)
    const [conversation, setConversation] = useState(null)


    const socket = useRef(io("ws://localhost:8900"))
    const scrollRef = useRef()


    const { user, loading: userLoading } = useSelector((state) => state.user);

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {

            // console.log(data,"EEEERRORR");
            setArrivalMessage({
                sender: data.sender,
                text: data.text,
                createdAt: Date.now()
            });
        });
        return () => {
            socket.current.close()
        }
    }, [socket]);

    useEffect(() => {
        arrivalMessage && 
        currentChat?.members.includes(arrivalMessage.sender._id) &&
        setMessages((prev) => [...prev,arrivalMessage])
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit("addUser", user._id)
        socket.current.on("getUsers", (users) => {
            users=JSON.parse(users)
           
        setOnlineUsers(
            user.following.filter((f)=>users.some((u)=>u.userId===f._id)))
        })
    }, [user.following])

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
            sender: user,
            text: newMessage,
            conversationId: currentChat._id
        }

        const receiverId = currentChat.members.find((member) => member !== user._id);
// console.log(user,"jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
        socket.current.emit("sendMessage", {
            senderId: {
                avatar:user.avatar,
                _id:user._id
            },
            receiverId,
            text: newMessage
        })

        try {
            const { data } = await axios.post(`/api/v1/message`, message)
            setMessages([...messages, data])
            setNewMessage("")

        } catch (err) {
            console.log(err);
        }
    }



    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])


    return (
        <div className="body-messager pt-2 ">
            <div className='messenger  container'>
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <h5>Recent Chats</h5>
                        {converstions.map((c) => (
                            <div key={c._id} onClick={() => setCurrentChat(c)}>
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
                                        <div key={m._id} ref={scrollRef}>
                                            < Message message={m} own={m.sender._id === user._id} />
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
                            : (
<>
                           <p className='noConversationText'>Open a conversation to start a chat.</p>
                            {/* <img className='noConversationImg' src={chatimg} alt="" /> */}
                            
                            </>
                            )
                            
                        }
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline
                         onlineUsers={onlineUsers && onlineUsers}
                          currentId={user._id} 
                          setCurrentChat={setCurrentChat}
                          />
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger