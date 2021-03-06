import React, { Component } from "react";
import { View, Text, Modal } from "react-native";
import { CardSection } from "./CardSection";
import { LoginButton } from "./LoginButton";

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <LoginButton onPress={onAccept}>Yes</LoginButton>
          <LoginButton onPress={onDecline}>No</LoginButton>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: "center"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: "rgba(0,0,0,0.75)",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  }
};

export { Confirm };
