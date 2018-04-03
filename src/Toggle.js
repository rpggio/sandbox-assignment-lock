import React from 'react';
import cn from 'classnames';
import { Flex, Box } from 'grid-styled';

import css from './Toggle.css';

export default ({ isOn }) => (
  <Box className={cn(css.toggle, isOn ? css.on : css.off)} width={50} height={26}>
    <Box className={cn(css.nub, isOn ? css.on : css.off)}>.</Box>
  </Box>
);
