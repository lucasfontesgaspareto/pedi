import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  color: green;
`;

export const Header = styled.View`
  margin-top: 40px;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  color: orange;
`;

export const Body = styled.View`
  padding: 8px;
  width: 100%;
`;

export const BodyHeader = styled.View``;

export const InputEmail = styled.TextInput`
  background-color: white;
  padding: 2px 4px;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const InputSenha = styled.TextInput`
  background-color: white;
  padding: 2px 4px;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  margin-top: 16px;
  background-color: orange;
  padding: 2px 4px;
  height: 50px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const ButtonLoginText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const BodyFooter = styled.View``;

export const ManterContainer = styled.View``;

export const CheckboxManter = styled.Switch``;

export const TextCheckboxManter = styled.Text``;

export const SignupContainer = styled.View``;

export const SignupText = styled.Text``;

export const SignupButton = styled.TouchableOpacity``;

export const SocialButtons = styled.View``;

export const SocialGoogle = styled.TouchableOpacity``;

export const SocialFacebook = styled.TouchableOpacity``;
