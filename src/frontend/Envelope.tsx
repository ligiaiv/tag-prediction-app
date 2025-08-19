import React, { useState } from 'react';
import axios from 'axios';
interface EnvelopeProps {
  envelope: EnvelopeResponse
}

const Envelope: React.FunctionComponent<EnvelopeProps> = ({envelope}: EnvelopeProps) => {
  const {name, id: envelopeId, userId, value} = envelope;
  const [transferValue, setTransferValue] = useState('');
  const handleTransferValue = async (transferType: string) => {
    try {
      await axios
        .post('/transfer', { userId, envelopeId, transferValue, transferType })
        .then((res) => {
          console.log('Successfully added!');
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>{name}</p>
      <p>{value}</p>
      <text
        id={'value-text'}
        onChange={(e) => setTransferValue(e.target.value)}
      >
        {transferValue}
      </text>
      <button id={'add-button'} onClick={(e) => handleTransferValue('ADD')}>
        Add
      </button>
      <button
        id={'remove-button'}
        onClick={(e) => handleTransferValue('SUBTRACT')}
      >
        Remove
      </button>
    </div>
  );
};

export default Envelope;