import React, { memo, useCallback } from 'react';
import { Flex, Text } from '@react-yuki/ui';
import Compass from "../../assets/Compass"
import { arrayFromInterger, getSquareSize } from 'app/utils';
import { TABLE_DIMENSION } from 'app/configs/constants';
import { Square } from 'app/components/styledComponents';
import Robot from 'app/containers/Robot';
import ErrorMessage from 'app/containers/ErrorMessage';

const Table = memo(() => {
  const rows = arrayFromInterger(TABLE_DIMENSION.y);

  const columns = arrayFromInterger(TABLE_DIMENSION.x);

  const renderRow = useCallback(
    (rowIndex: number) => (
      <Flex width={1} key={`row-${rowIndex}`}>
        {columns.map((squareIndex: number) => (
          <Square
            key={`square-${squareIndex}`}
            bg={(rowIndex + squareIndex) % 2 === 0 ? '#3a1c46' : '#22F5A9'}
          />
        ))}
      </Flex>
    ),
    [columns]
  );

  const renderCoordinateX = (idx: number) => (
    <Flex
      key={`coordinate-x-${idx}`}
      alignItems="center"
      justifyContent="center"
      width={getSquareSize()}
      height="60px"
    >
      <Text fontSize={4} color="gray.8" textAlign="center">
        {idx}
      </Text>
    </Flex>
  );

  const renderCoordinateY = (idx: number) => (
    <Flex
      key={`coordinate-y-${idx}`}
      alignItems="center"
      justifyContent="center"
      height={getSquareSize('y')}
      width="60px"
    >
      <Text fontSize={4} color="gray.8" textAlign="center">
        {TABLE_DIMENSION.y - 1 - idx}
      </Text>
    </Flex>
  );

  return (
    <Flex width={[1, 1, 1 / 2, 1 / 2]} mb={[4, 4, 0, 0]}>
      <Flex flex="none" width="60px" flexDirection="column" height="inherit">
        <Flex flex="1 0 auto" flexDirection="column">
          {rows.map(renderCoordinateY)}
        </Flex>
        <Flex alignItems="center" justifyContent="center" flex="none" height="60px">
          <Compass width='60' height='60' color='#3a1c46'/>
        </Flex>
      </Flex>
      <Flex width={1} flexDirection="column" flex="1 1 auto">
        <Flex width={1} position="relative" flexDirection="column">
          {rows.map(renderRow)}
          <Robot />
          <ErrorMessage />
        </Flex>
        <Flex width={1}>{columns.map(renderCoordinateX)}</Flex>
      </Flex>
    </Flex>
  );
});

Table.displayName = 'Table';

export default Table;
