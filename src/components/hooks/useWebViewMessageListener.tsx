// import { useState, useEffect } from 'react';

// export const useWebViewMessageListener = (): string | null => {
//   const [receivedData, setReceivedData] = useState<string | null>(null);

//   useEffect((): (() => void) => {
//     const handleMessage = (event: MessageEvent): void => {
//       setReceivedData(event.data);
//     };

//     window.addEventListener('message', handleMessage);

//     return (): void => {
//       window.removeEventListener('message', handleMessage);
//     };
//   }, []);

//   return receivedData;
// };

// export const sendJSONToNative = (data?: string): void => {
//   (window as unknown as {
//     ReactNativeWebView?: { postMessage: (message: string) => void };
//   }).ReactNativeWebView?.postMessage(
//     data ?? 'pass custom data to React Native App'
//   );
// };

import { useEffect, useState } from "react";

export const useWebViewMessageListener = (): any | null => {
  const [receivedData, setReceivedData] = useState<any | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent): void => {
      try {
        const parsed = JSON.parse(event.data);
        setReceivedData(parsed);
      } catch {
        setReceivedData(event.data); // fallback for plain strings
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return receivedData;
};

export const sendJSONToNative = (data?: object | string): void => {
  const message = typeof data === "string" ? data : JSON.stringify(data);

  (window as unknown as {
    ReactNativeWebView?: { postMessage: (message: string) => void };
  }).ReactNativeWebView?.postMessage(message);
};
