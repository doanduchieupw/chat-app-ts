import { AppShell, Aside, Text } from '@mantine/core';
import AsideCustom from './aside';
import HeaderCustom from './header';
import Sidebar from './side-bar';

const FullLayout = () => {
  return (
    <AppShell navbar={<Sidebar />} aside={<AsideCustom />} header={<HeaderCustom />}>
      AppShell 1
    </AppShell>
  );
};

export default FullLayout;
