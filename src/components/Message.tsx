// import { ReactNode } from "react";
import React from "react";

interface MessageProps {
  className: string;
  handleClick: (user: { name: string; email: string; message: string }) => void;
  // children?: ReactNode;
  children?: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({
  className,
  handleClick,
  children,
}) => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    message: "Hello, I'm looking for a job in your company.",
  };

  return (
    <div className={className}>
      <p>user: {JSON.stringify(user)} </p>
      <button
        className="p-2 bg-teal-300 rounded-md"
        onClick={() => handleClick(user)}
      >
        Share my profile
      </button>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Message;
