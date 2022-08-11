import React from "react";

export function MessagesList(props) {

    return props.messages.map((message) => 
    <div className="message">{'Сообщение от '+ message.autor + ': ' + message.text}</div>);
}

