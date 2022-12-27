import React, { useState } from 'react';
import { createStyles, useMantineTheme, Center, Navbar, SegmentedControl } from '@mantine/core';
import { FileIcon, MessageIcon, SettingIcon } from '../../../assets/public/icon';

interface ISidebar {
  label: React.ReactNode;
  value: string;
}
const SidebarList: ISidebar[] = [
  {
    label: <MessageIcon />,
    value: 'messageIcon',
  },
  {
    label: <SettingIcon />,
    value: 'settingIcon',
  },
  {
    label: <FileIcon />,
    value: 'fileIcon',
  },
];

const useStyles = createStyles((theme) => ({
  root: {
    height: 200,
    justifyContent: 'space-between',
  },
  active: {
    backgroundColor: '#5051F9',
  },
  labelActive: {
    borderRadius: 14,
  },
  label: {
    padding: 13,
  },
  control: {
    '&:not(:first-of-type)': {
      borderColor: theme.colors.dark[8],
    },
  },
}));

const Sidebar = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [choice, setChoice] = useState(SidebarList[0].value);
  return (
    <Navbar width={{ xs: 60 }} bg={theme.colors.dark[8]}>
      <Center style={{ height: '100%' }}>
        <SegmentedControl
          classNames={{
            root: classes.root,
            active: classes.active,
            label: classes.label,
            labelActive: classes.labelActive,
            control: classes.control,
          }}
          bg={theme.colors.dark[8]}
          orientation='vertical'
          data={SidebarList}
          value={choice}
          onChange={setChoice}
        />
      </Center>
    </Navbar>
  );
};

export default Sidebar;
