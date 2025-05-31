import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Home() {

  const username = localStorage.getItem("username");

  const [messages, setMessage] = useState([]);
  const [text, setText] = useState([]);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });

    axios
      .get("https://682199fa259dad2655afc100.mockapi.io/messages")
      .then((res) => {
        setMessage(res.data);
      });
  }, [text]);

  const sendChat = () => {
    if (text == "") {
      return;
    }

    axios
      .post("https://682199fa259dad2655afc100.mockapi.io/messages", {
        text: text,
        user: username,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setText("");
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return username ? (
    <div className="bg-gray-400 py-10 flex flex-col justify-center items-center">
      <div className="w-9/10 lg:w-7/10 p-2 bg-blue-100 rounded-t-2xl flex gap-3 items-center border">
        <img
          className="w-30 rounded-full self-start border"
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt=""
        />
        <h2 className="text-xl">Group Chat</h2>
      </div>

      <div
        style={{ overflowY: "scroll" }}
        className="flex flex-col gap-3 w-9/10 lg:w-7/10 bg-blue-300 h-[60vh] border"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              username == message.user
                ? "flex flex-col bg-gray-900 text-white w-1/2 h-full p-3  self-end rounded-2xl m-3"
                : "flex flex-col bg-gray-200 w-1/2 p-3 m-3 rounded-2xl"
            }
          >
            <p className="text-xl">{message.text}</p>
            <span className="text-sm">{message.user}</span>
          </div>
        ))}
      </div>

      {/*  */}
      <div className="flex w-9/10 lg:w-7/10 border rounded-b-2xl p-3 gap-10 bg-gray-500">
        <input
          type="text"
          placeholder="Text here"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-900 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendChat();
          }}
        />
        <button
          onClick={sendChat}
          className="flex w-1/5 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  ) : (
    <div className="p-5 text-3xl flex justify-center items-center font-bold text-center h-[70vh]">
      <div>You are not logged in, please log in to chat</div>
    </div>
  );
}

export default Home;
