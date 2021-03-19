import React from "react";
import {
  Container,
  Header,
  HeaderText,
  Body,
  BodyHeader,
  InputEmail,
  InputSenha,
  ButtonLogin,
  BodyFooter,
  ManterContainer,
  CheckboxManter,
  TextCheckboxManter,
  SignupContainer,
  SignupText,
  SignupButton,
  SocialButtons,
  SocialGoogle,
  SocialFacebook,
  ButtonLoginText,
} from "./style";

interface Params {
  navigation: any;
}

export default function Login({ navigation }: Params) {
  return (
    <Container>
      <Header>
        <HeaderText>Pedimusica - Login</HeaderText>
      </Header>

      <Body>
        <BodyHeader>
          <InputEmail></InputEmail>
          <InputSenha></InputSenha>
          <ButtonLogin>
            <ButtonLoginText>Login</ButtonLoginText>
          </ButtonLogin>
        </BodyHeader>

        <BodyFooter>
          <ManterContainer>
            <CheckboxManter></CheckboxManter>
            <TextCheckboxManter></TextCheckboxManter>
          </ManterContainer>
          <SignupContainer>
            <SignupText></SignupText>
            <SignupButton></SignupButton>
          </SignupContainer>
        </BodyFooter>
      </Body>

      <SocialButtons>
        <SocialGoogle></SocialGoogle>
        <SocialFacebook></SocialFacebook>
      </SocialButtons>
    </Container>
  );
}
