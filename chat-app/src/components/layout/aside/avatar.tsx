import { Avatar, Center, Flex, Text } from '@mantine/core';

const AvatarAside = () => {
  return (
    <Center>
      <Flex gap='xs' justify='center' align='center' direction='column'>
        <Avatar
          radius={100}
          size={94}
          src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/38a1c0100161953.5f032a4fc05e6.jpg'
          alt="it's me"
        />
        <Text color='white' fw={700} fz={16}>
          Killan James
        </Text>
        <Text color='gray' fw={700} fz={12}>
          @killan james
        </Text>
      </Flex>
    </Center>
  );
};

export default AvatarAside;
