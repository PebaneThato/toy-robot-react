import React, { SFC } from 'react';
import { Spring } from 'react-spring/renderprops.cjs';
// import RobotIcon from '@react-yuki/icons/lib/RobotVacuum';
import RobotIcon from '../../assets/RobotIcon';
import { usePrevious } from '@react-yuki/hooks';
import { RobotProps } from 'app/components/robot/types';
import { RobotContainer } from 'app/components/styledComponents';
import { Coordinate } from 'app/types';
import { createRobotTransition } from 'app/utils';

const Robot: SFC<RobotProps> = ({ coordinate, isPlaced, rotateDeg }) => {
  const prevCoordinate = usePrevious<Coordinate>(coordinate);

  const prevIsPlaced = usePrevious<boolean>(isPlaced);

  const prevRotateDeg = usePrevious<number>(rotateDeg);

  if (!isPlaced) return null;

  const { currentTransition, prevTransition } = createRobotTransition({
    prevIsPlaced,
    coordinate,
    prevCoordinate,
    rotateDeg,
    prevRotateDeg
  });

  return (
    <Spring from={{ ...prevTransition }} to={{ ...currentTransition }}>
      {props => (
        <RobotContainer style={props}>
          {/* <RobotIcon width="60%" height="60%" viewBox="0 0 480 480" /> */}
          <RobotIcon width='70%' height='70%' color='#fff'/>
        </RobotContainer>
      )}
    </Spring>
  );
};

Robot.displayName = 'Robot';

export default Robot;
