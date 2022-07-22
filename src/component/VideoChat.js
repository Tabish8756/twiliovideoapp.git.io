import{useState, useCallback} from 'react';
import React from 'react';
import Lobby from './Lobby';
import Room from './Room';
function VideoChat(){
    const[userName, setUserName]=useState('')
    const[roomName, setRoomName]=useState('')
    const[token, setToken]=useState()
const handleName=(e)=>{
    setUserName(e.target.value);
}
const handleRoom=(e)=>{
    setRoomName(e.target.value);
}
const handleSubmit=async(e)=>{
    e.preventDefault();
    const data=await fetch("https://ginger-centipede-2138.twil.io/AccessToken",{
        method:'POST',
        body:JSON.stringify({
            identity:userName,
            room:roomName
        }),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>res.json());
    console.log(data)
    setToken(data);
}
    const handleLogout=(e)=>{
        setToken(null);
    }
    if(token){
        return(
        <Room roomName={roomName} token={token} handleLogout={handleLogout} />
        )
       
    }
    else{
        return(
            <Lobby
         userName={userName}
         roomName={roomName}
         handleName={handleName}
         handleRoom={ handleRoom}
         handleSubmit={handleSubmit}
      />
        )
    }
    }

export default VideoChat;