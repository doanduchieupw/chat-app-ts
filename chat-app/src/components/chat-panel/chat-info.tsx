import { Avatar, Flex, Text } from '@mantine/core';

const ChatInfo: React.FC = () => {
  return (
    <Flex justify='space-between'>
      <Flex gap='xs'>
        <Avatar
          radius={100}
          size={50}
          src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/38a1c0100161953.5f032a4fc05e6.jpg'
          alt="it's me"
        />
        <div>
          <Text>Novita</Text>
          <Text fz={14}>yah, nice design</Text>
        </div>
      </Flex>
      <Flex direction='column' align='flex-end'>
        <Text>4:30 PM</Text>
        <div
          style={{
            width: 16,
            height: 16,
            backgroundColor: 'red',
            borderRadius: 100,
            fontSize: '14px',
            lineHeight: '16px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          2
        </div>
      </Flex>
    </Flex>
  );
};

export default ChatInfo;
