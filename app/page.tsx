"use client";
import { useEffect, useCallback, useState } from "react";
export default function Home() {
  const [text, setText] = useState("");

  const isEvenLength = useCallback(() => {
    return text.length % 2 === 0;
  }, [text]);

  useEffect(() => {
    console.log("The text length is even!");
  }, [isEvenLength]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
    </div>
  );
}
