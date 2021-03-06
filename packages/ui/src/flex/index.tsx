import React, { forwardRef } from 'react';
import { Box } from '../box';
import { FlexProps } from './types';

const Flex = forwardRef<any, FlexProps>(({ align, justify, wrap, direction, ...rest }, ref) => (
  <Box
    ref={ref}
    display="flex"
    flexDirection={direction}
    alignItems={align}
    justifyContent={justify}
    flexWrap={wrap}
    {...rest}
  />
));

Flex.displayName = 'Flex';

export { Flex, FlexProps };
