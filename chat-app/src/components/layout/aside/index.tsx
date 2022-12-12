import { Aside, Text } from '@mantine/core';

const AsideCustom = () => {
  return (
    <Aside p='md' hiddenBreakpoint='sm' w={333} bg='black'>
      <Text>Application sidebar</Text>
    </Aside>
  );
};

export default AsideCustom;
