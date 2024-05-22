import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

export default function TabChatScreen() {
  const [messages, setMessages] = useState<Array<IMessage>>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hola, ¿en qué puedo ayudarte?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Juan",
          avatar:
            "https://img.freepik.com/vector-gratis/chatbot-mensaje-chat-vectorart_78370-4104.jpg",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );

    const lastMessage = newMessages[0];
    if (lastMessage && !lastMessage.system) {
      setTimeout(() => {
        const responseMessage = {
          _id: Math.round(Math.random() * 1000000).toString(),
          text: "Dame la dirección del incidente",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Juan",
            avatar:
              "https://img.freepik.com/vector-gratis/chatbot-mensaje-chat-vectorart_78370-4104.jpg",
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [responseMessage])
        );
      }, 1000);
    }
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages: IMessage[]) => onSend(newMessages)}
      placeholder="Escribe un mensaje..."
      user={{
        _id: 1,
        name: "Usuario",
        avatar:
          "https://img.freepik.com/vector-gratis/chatbot-mensaje-chat-vectorart_78370-4104.jpg",
      }}
    />
  );
}
