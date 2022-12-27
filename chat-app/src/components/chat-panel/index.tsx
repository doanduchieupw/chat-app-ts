import { Stack } from '@mantine/core';
import React from 'react';
import ChatInfo from './chat-info';

const ChatPanel: React.FC = () => {
  return (
    <Stack w={300}>
      <ChatInfo />
    </Stack>
  );
};

export default ChatPanel;
