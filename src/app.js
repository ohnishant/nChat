const client = new tmi.Client({
    channels: [ 'nllsh' ]
})

client.connect();

const max_messages = 100

client.on("chat", (channel, tags, message, self) => {

    // const chat_message = `${tags["display-name"]}: ${message}`;
    const username = document.createTextNode(`${tags["display-name"]}: `);
    const user_message = document.createTextNode(`${message}`);

    // console.log(tags);

    var msg = document.createElement('div');
    msg.id = tags["id"];
    msg.className = "message";

    // username shenanigans
    msg_user = document.createElement('span');
    msg_user.appendChild(username)

    if (tags["color"] == null) {
        // make all unset colored users blue
        msg_user.style.color = "#1E90FF";
    } else {
        msg_user.style.color = tags["color"];

    }

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

client.on("messagedeleted", (channel, username, deletedMessage, userState) => {
    deleted_msg_id = userState["target-msg-id"];
    deleted_msg = document.getElementById(deleted_msg_id);
    // console.log(userState);
    // console.log(deleted_msg)
    deleted_msg.remove();
})