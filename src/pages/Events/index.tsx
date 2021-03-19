import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Container } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Events() {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Events</Text>
      <TouchableOpacity
        style={{ padding: 40, backgroundColor: "white" }}
        onPress={() => navigation.navigate("EventDetail")}
      >
        <Text>Detalhe</Text>
      </TouchableOpacity>
    </Container>
  );
}
