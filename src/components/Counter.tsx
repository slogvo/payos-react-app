import { useState } from "react";

interface counterInfo {
  name: string;
  age?: number;
  avatar?: object;
}

interface CounterProps {
  initialCount?: number;
  info?: counterInfo;
}
const Counter: React.FC<CounterProps> = ({
  initialCount = 0,
  info = { name: "Long" },
}) => {
  const [count, setCount] = useState<number>(initialCount);

  console.log("Counter re-rendered!");
  const handleIncrementCounter: () => void = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>{JSON.stringify(info)}</h2>
      <button
        onClick={() => handleIncrementCounter()}
        className="bg-blue-500 text-white px-4 py-2 rounded my-3"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
