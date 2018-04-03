import React from 'react';
import cn from 'classnames';
import { Flex, Box } from 'grid-styled';

import Toggle from './Toggle';

import css from './AssignmentTile.css';

const AssignmentTile = ({
  assessment: { unlockAt, lockAt, timeLimit, isLocked },
  onToggleLocked,
  onBeginEdit
}) => (
  <div className={css.container}>
    <Flex 
      className={cn(css.header, isLocked ? css.locked : css.unlocked)}
      flexDirection="row"
      flexWrap="no-wrap">
      <Box ml={11} mt={11} className={cn(css.title)}>
        {isLocked ? 'Locked' : 'Unlocked'}
      </Box>
      <Box>
        <Toggle className={cn.toggle} isOn={!isLocked} />
      </Box>
    </Flex>
    <div className={css.body} />
  </div>
);

AssignmentTile.defaultProps = {
  assessment: {},
  onToggleLocked: () => {},
  onBeginEdit: () => {}
};

export default AssignmentTile;
