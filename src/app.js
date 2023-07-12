const client = new tmi.Client({
    channels: [ 'ml7Support' ]
})

client.connect();

const max_messages = 100

client.on("chat", (channel, tags, message, self) => {

    // const chat_message = `${tags["display-name"]}: ${message}`;
    const username = document.createTextNode(`${tags["display-name"]}: `);
    const user_message = document.createTextNode(`${message}`);

    console.log(tags)

    var msg = document.createElement('div');
    msg.id = tags["id"];
    msg.className = "message";

    // username shenanigans
    msg_user = document.createElement('span');
    msg_user.appendChild(username)
    msg_user.style.color = tags["color"];

    // message content shenanigans
    msg_content = document.createElement("span");
    msg_content.class = "message-content"
    msg_content.appendChild(user_message);

    msg.appendChild(msg_user);
    msg.appendChild(msg_content);
    
    var chatbox = document.getElementById("message-box");
    
    const message_count = chatbox.children.length;
    if (message_count >= max_messages) {
        // chatbox.remove(chatbox.firstElementChild);
    }

    chatbox.appendChild(msg)

    // console.log(chat_message);
    // console.log(message_element);
    chatbox.scrollTop = chatbox.scrollHeight;

})