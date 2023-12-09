import { useEffect, useState } from "react";
export function useUserStatus(id, example) {
  const [isOnline, setIsOnline] = useState(null);
  function handleStatusChange(status) {
    setIsOnline(status);
  }
  useEffect(() => {
    example.subscribeToFriendStatus(id, handleStatusChange);
    return () => {
      example.unsubscribeToFriendStatus(id, handleStatusChange);
    };
  });
  return isOnline;
}
