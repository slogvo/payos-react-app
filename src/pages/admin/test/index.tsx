import Counter from "@/components/Counter";
import Message from "@/components/Message";
import { useState } from "react";
const Test = () => {
  const [text, setText] = useState<string>("");
  const [userInfo, setUserInfo] = useState<{
    name?: string;
    email?: string;
    message?: string;
  } | null>(null);
  const handleShare = (user: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("🚀 User shared:", user);
    setUserInfo(user);
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold">Counter Test</h3>
      <Counter initialCount={10} info={{ name: "Hoang", age: 18 }} />

      <p>Text: {text}</p>
      <input
        type="text"
        value={text}
        className="border p-2 rounded-sm w-full max-w-[500px]"
        onChange={(e) => setText(e.target.value)}
      />

      <Message className="mt-3" handleClick={handleShare}>
        {/* Customize Slot */}
        <div>
          <span>This is Message slot</span>
          {userInfo && (
            <div>
              <span>{userInfo?.name}</span>
              <span>{userInfo?.email}</span>
            </div>
          )}
        </div>
      </Message>
    </div>
  );
};

export default Test;
