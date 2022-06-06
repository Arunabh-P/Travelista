import React from 'react'
import ChatOnline from '../ChatOnline/ChatOnline'
import Conversation from '../conversations/Conversation'
import Message from '../Message/Message'
import "./Messenger.css"
function Messenger() {
    return (
        <div className="body-messager pt-2 ">
        <div className='messenger  container'>
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />

                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <>
                        <div className="chatBoxTop">
                            <Message />
                            <Message own={true} />

                            <Message />
                            <Message own={true} />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea placeholder='write something...' className="chatMessageInput" ></textarea>

                            <button className="chatSubmitButton">
                                Send
                            </button>
                        </div>
                    </>
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