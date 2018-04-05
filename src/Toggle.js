import React from 'react';
import cn from 'classnames';

import css from './Toggle.css';

export default ({ isOn }) => (
  <div className={cn(css.toggle, isOn ? css.on : css.off)}>
    <div className={cn(css.nub, isOn ? css.on : css.off)}></div>
  </div>
);
