import { Aside, Text, useMantineTheme } from '@mantine/core';
import AvatarAside from './avatar';

const AsideCustom = () => {
  const theme = useMantineTheme();
  return (
    <Aside p='md' hiddenBreakpoint='sm' w={333} bg={theme.colors.dark[8]}>
      <AvatarAside />
    </Aside>
  );
};

export default AsideCustom;
