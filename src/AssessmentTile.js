import React from 'react';
import cn from 'classnames';

import Toggle from './Toggle';
import Pencil from './Pencil';

import css from './AssessmentTile.css';

const AssessmentTile = ({
  assessment: { beginsAt, dueAt, timeLimit, isLocked },
  onToggleLocked,
  onBeginEdit
}) => (
  <div className={css.container}>
    <div className={cn(css.header, isLocked ? css.locked : css.unlocked)}>
      <div className={cn(css.title)}>{isLocked ? 'Locked' : 'Unlocked'}</div>
      <div className={css.toggle} onClick={() => onToggleLocked()}>
        <Toggle isOn={!isLocked} />
      </div>
    </div>

    <div className={css.body}>
      <div className={css.part}>
        Assessment
        <div className={css.beginEdit} onClick={onBeginEdit}>
          <Pencil />
        </div>
      </div>

      <div className={css.part}>Assessment Begins</div>
      <div className={css.val}>
        {(beginsAt && beginsAt.format('llll')) || 'Not Specified'}
      </div>

      <div className={css.part}>Assessment Due</div>
      <div className={css.val}>
        {(dueAt && dueAt.format('llll')) || 'Not Specified'}
      </div>

      <div mt={20}>{timeLimit}</div>
    </div>
  </div>
);

AssessmentTile.defaultProps = {
  assessment: {},
  onToggleLocked: () => {},
  onBeginEdit: () => {}
};

export default AssessmentTile;
