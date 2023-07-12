const client = new tmi.Client({
    channels: [ 'towdan' ]
})

client.connect();


client.on("message", (channel, tags, message, self) => {

    const chat_message = `${tags["display-name"]}: ${message}`;
    // console.log(chat_message);
    // console.log(tags)

    var tag = document.createElement('div');
    tag.id = tags["id"];

    var text = document.createTextNode(chat_message);
    tag.appendChild(text);

    var chatbox = document.getElementById("message-box");

    chatbox.appendChild(tag)

    // console.log(chat_message);
    // console.log(message_element);

})