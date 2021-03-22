import React from 'react';
import Message from '../Message';
import { Container } from './styles';

export default function ChatMessage({ theme }) {
  return (
    <Container>
      <Message
        data={{
          id: 10,
          author: 'orange',
          message:
            'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime(),
        }}
        isMine={true}
        isStartsSequence={true}
        endsSequence={false}
        showTimestamp={true}
        theme={theme}
      />
      <Message
        data={{
          id: 10,
          author: 'orange',
          message:
            'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime(),
        }}
        isMine={false}
        isStartsSequence={true}
        endsSequence={false}
        showTimestamp={false}
        theme={theme}
      />
    </Container>
  );
}
