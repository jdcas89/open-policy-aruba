import React from 'react';
import { useMotionList } from '../../../utils/useMotionList';
import MotionList from '../../organisms/MotionList';

const Homepage = () => {
  const [motions] = useMotionList();
  return <MotionList motions={motions} />;
};

export default Homepage;
