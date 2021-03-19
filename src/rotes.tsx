import React, { useContext, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./pages/Login";
import Slides from "./pages/Slides";

import { IAlreadyLaunched } from "./utils/accessStorage";
import { PedimusicaProvider } from "./contexts/Pedimusica";

import CoordinateContext from "./contexts/Coordinate";
import MyEvents from "./pages/MyEvents";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import EventDetail from "./pages/EventDetail";

const { Navigator, Screen } = createStackNavigator();
const CreatePedimusicaStack = createStackNavigator();
const CreatePedimusicaEventsStack = createStackNavigator();
const CreatePedumusicaTab = createBottomTabNavigator();

interface Params {
  alreadyLaunched: IAlreadyLaunched;
}

function EventsStackScreen() {
  return (
    <CreatePedimusicaEventsStack.Navigator initialRouteName="Home">
      <CreatePedimusicaEventsStack.Screen name="Events" component={Events} />
      <CreatePedimusicaEventsStack.Screen
        name="EventDetail"
        component={EventDetail}
      />
    </CreatePedimusicaEventsStack.Navigator>
  );
}

function CreatePedimusicaTabScreen() {
  return (
    <CreatePedumusicaTab.Navigator initialRouteName="Events">
      <CreatePedumusicaTab.Screen name="MyEvents" component={MyEvents} />
      <CreatePedumusicaTab.Screen name="Events" component={EventsStackScreen} />
      <CreatePedumusicaTab.Screen name="Perfil" component={Profile} />
    </CreatePedumusicaTab.Navigator>
  );
}

export default function Routes({ alreadyLaunched }: Params) {
  const isLogged = true;

  const { getCoordinate } = useContext(CoordinateContext);

  useEffect(() => {
    async function Coordinate() {
      await getCoordinate();
    }

    Coordinate();
  }, []);

  return (
    <NavigationContainer>
      <Navigator
        // headerMode="none"
        initialRouteName={!alreadyLaunched.ready ? "Slides" : "Login"}
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f2f3f5",
          },
        }}
      >
        {!alreadyLaunched.ready && (
          <Screen
            name="Slides"
            component={Slides}
            options={{
              headerShown: false,
            }}
          />
        )}

        {!isLogged ? (
          <Screen
            name="Login"
            options={{
              headerShown: false,
            }}
            component={Login}
          />
        ) : (
          <Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={CreatePedimusicaTabScreen}
          />
        )}
      </Navigator>
    </NavigationContainer>
  );
}
