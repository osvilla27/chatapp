import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTextMessage } from "store/thunk/fetchMessage";

export const useMessage = () => {
  const [number, setNumber] = useState("573103172989");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("text");

  const dispatch = useDispatch();
  const { isLoding, error } = useSelector((state) => state.message);

  const data = messageType(type, message, number);
  const raw = JSON.stringify(data);

  const handleSendMessage = () => {
    dispatch(fetchTextMessage(raw));
  };

  return { 
    setNumber, 
    setMessage, 
    setType, 
    isLoding, 
    error, 
    handleSendMessage };
};

const textMessage = (message, number) => ({
  messaging_product: "whatsapp",
  to: number,
  type: "text",
  text: {
    body: message,
  },
});

const imageMessage = (img, number) => ({
  messaging_product: "whatsapp",
  to: number,
  type: "image",
  image: {
    link: img,
  },
});

const audioMessage = (audio, number) => ({
  messaging_product: "whatsapp",
  to: number,
  type: "audio",
  audio: {
    link: audio,
  },
});

const videoMessage = (video, number) => ({
  messaging_product: "whatsapp",
  to: number,
  type: "video",
  video: {
    link: video,
  },
});

const documentMessage = (ducument, number) => ({
  messaging_product: "whatsapp",
  to: number,
  type: "ducument",
  ducument: {
    link: ducument,
  },
});

const locationMessage = (location, number) => ({
  messaging_product: "whatsapp",
  to: number,
  type: "location",
  location: {
    latitude: location["latitude"],
    longitude: location["longitude"],
    name: location["name"],
    address: location["address"],
  },
});

const buttonMessage = (button, number) => ({
  messaging_product: "whatsapp",
  recipient_type: "individual",
  to: number,
  type: "interactive",
  interactive: {
    type: "button",
    body: {
      text: "Ordenar productos",
    },
    action: {
      buttons: [
        {
          type: "reply",
          reply: {
            id: "001",
            title: "Ordenar",
          },
        },
        {
          type: "reply",
          reply: {
            id: "002",
            title: "Cancelar",
          },
        },
      ],
    },
  },
});

const listMessage = (list, number) => ({
  messaging_product: "whatsapp",
  to: number,
  type: "interactive",
  interactive: {
    type: "list",
    body: {
      text: "✅ I have these options",
    },
    footer: {
      text: "Select an option",
    },
    action: {
      button: "See options",
      sections: [
        {
          title: "Buy and sell products",
          rows: [
            {
              id: "main-buy",
              title: "Buy",
              description: "Buy the best product your home",
            },
            {
              id: "main-sell",
              title: "Sell",
              description: "Sell your products",
            },
          ],
        },
        {
          title: "📍center of attention",
          rows: [
            {
              id: "main-agency",
              title: "Agency",
              description: "Your can visit our agency",
            },
            {
              id: "main-contact",
              title: "Contact center",
              description: "One of our agents will assist you",
            },
          ],
        },
      ],
    },
  },
});

const messageType = (type, message, number) => {
  switch (type) {
    case "image":
      return imageMessage(message, number);
    case "audio":
      return audioMessage(message, number);
    case "video":
      return videoMessage(message, number);
    case "document":
      return documentMessage(message, number);
    case "location":
      return locationMessage(message, number);
    case "button":
      return buttonMessage(message, number);
    case "list":
      return listMessage(message, number);
    default:
      return textMessage(message, number);
  }
};
