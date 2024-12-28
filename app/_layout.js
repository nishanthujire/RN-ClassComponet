import {Stack} from "expo-router";
import {useEffect} from "react";
import * as Notifications from "expo-notifications";
import {router} from "expo-router";

function useNotificationObserver() {
  useEffect(() => {
    let isMounted = true;

    function redirect(notification) {
      const url = notification.request.content.data?.url;
      if (url) {
        router.push(url);
      }
    }

    Notifications.getLastNotificationResponseAsync().then((response) => {
      if (!isMounted || !response?.notification) {
        return;
      }
      redirect(response?.notification);
    });

    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        redirect(response.notification);
      }
    );

    return () => {
      isMounted = false;
      subscription.remove();
    };
  }, []);
}

export default function _layout() {
  useNotificationObserver();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="notifications" />
    </Stack>
  );
}
