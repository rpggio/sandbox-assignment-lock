import React from 'react';
import cn from 'classnames';
import { Flex, Box } from 'grid-styled';

import Toggle from './Toggle';
import Pencil from './Pencil';

import css from './AssignmentTile.css';

const AssignmentTile = ({
  assessment: { unlockAt, lockAt, timeLimit, isLocked },
  onToggleLocked,
  onBeginEdit
}) => (
  <div className={css.container}>
    <div 
      className={cn(css.header, isLocked ? css.locked : css.unlocked)}>
      <div className={cn(css.title)}>
        {isLocked ? 'Locked' : 'Unlocked'}
      </div>
      <div className={css.toggle}>
        <Toggle isOn={!isLocked} />      
      </div>
    </div>

    <div className={css.body} >
        <Box mt={12}>Administer <Pencil onClick={ onBeginEdit } /></Box>
        <Box mt={12}>Assignment Unlock</Box>
        <Box className={css.val}>{ unlockAt || 'Not Specified' }</Box>
        <Box mt={12}>Assignment Lock</Box>
        <Box className={css.val}>{ lockAt || 'Not Specified' }</Box>
        <Box mt={20}>{timeLimit}</Box>
    </div>
  </div>
);

AssignmentTile.defaultProps = {
  assessment: {},
  onToggleLocked: () => {},
  onBeginEdit: () => {}
};

export default AssignmentTile;
