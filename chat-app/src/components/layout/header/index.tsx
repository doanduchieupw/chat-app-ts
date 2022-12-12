import { Avatar, Flex, Header, Input, Tooltip } from '@mantine/core';
import { Logo } from '../../../assets/public';
import styled from 'styled-components';
import { BellIcon } from '../../../assets/public/icon';

import { IconSearch } from '@tabler/icons';

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .avatar-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderCustom = () => {
  return (
    <Header height={76} p='xs' bg='black'>
      <HeaderInner>
        <Logo />
        <Input
          w={180}
          placeholder='Search anything...'
          rightSection={
            <Tooltip label='This is public' position='top-end' withArrow>
              <div>
                <IconSearch size={18} style={{ display: 'block', opacity: 0.5, color: 'black' }} />
              </div>
            </Tooltip>
          }
          styles={(theme) => ({
            input: {
              '&:focus-within': {
                borderColor: theme.colors.orange[7],
              },
            },
          })}
        />
        <div className='avatar-section'>
          <BellIcon />
          <Avatar
            radius='xl'
            src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/38a1c0100161953.5f032a4fc05e6.jpg'
            alt="it's me"
          />
        </div>
      </HeaderInner>
    </Header>
  );
};

export default HeaderCustom;
