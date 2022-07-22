import React from "react";
const Lobby=({
    userName,handleName,
    roomName,handleRoom,
    handleSubmit
})=>{
return(
    <form onSubmit={handleSubmit}>
        <h3>Enter Room</h3>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="feild" value={userName} onChange={handleName} required /></div>
            <div>
            <label htmlFor="room">Room Name:</label>
            <input type="text" id="room" value={roomName} onChange={handleRoom} required /></div>
            <button type="submit">submit</button>

    </form>
)
}
export default Lobby;