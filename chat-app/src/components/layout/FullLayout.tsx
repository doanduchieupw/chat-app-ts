import { AppShell, Aside, Text } from '@mantine/core';
import ChatPanel from '../chat-panel';
import AsideCustom from './aside';
import HeaderCustom from './header';
import Sidebar from './side-bar';

const FullLayout = () => {
  return (
    <AppShell navbar={<Sidebar />} aside={<AsideCustom />} header={<HeaderCustom />}>
      <ChatPanel />
    </AppShell>
  );
};

export default FullLayout;
