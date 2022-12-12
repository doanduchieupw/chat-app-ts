import { Center, Flex, Navbar, SegmentedControl } from '@mantine/core';
import { FileIcon, MessageIcon, SettingIcon } from '../../../assets/public/icon';

const Sidebar = () => {
  return (
    <Navbar p='md' width={{ xs: 60 }} bg='black'>
      <div style={{ color: 'black' }}>
        <Center>
          <Flex gap='md' justify='center' align='center' direction='column' mih='500'>
            <SegmentedControl
              bg='black'
              color='#5051F9'
              orientation='vertical'
              data={[
                { label: <MessageIcon />, value: 'messageIcon' },
                { label: <SettingIcon />, value: 'settingIcon' },
                { label: <FileIcon />, value: 'fileIcon' },
              ]}
            />
          </Flex>
        </Center>
      </div>
    </Navbar>
  );
};

export default Sidebar;
