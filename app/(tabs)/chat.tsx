import React, { useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import { Bubble, GiftedChat, IMessage } from "react-native-gifted-chat";
import { SafeAreaView } from "react-native-safe-area-context";

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
          text: "Gracias por tu mensaje. Estoy aquí para ayudarte.",
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
    <View style={{ flex: 1 }}>
      <GiftedChat
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                left: {
                  backgroundColor: "#f0f0f0",
                },
                right: {
                  backgroundColor: "#006FFD",
                },
              }}
            />
          );
        }}
        placeholder="Escribe un mensaje..."
        messages={messages}
        onSend={(newMessages: IMessage[]) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}
