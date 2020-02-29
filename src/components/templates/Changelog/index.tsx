import React from 'react';
import { H1, H2 } from '../../atoms/Typography';
import styled from 'styled-components';

const Changelog = () => {
  return (
    <ChangeLogContainer>
      <H1 p="16px" m="0" color="primary" fontSize="24px">
        Release notes
      </H1>
      <VersionSection>
        <H2 p="16px" m="0" color="primary" fontSize="18px">
          Version 0.2.0 ( 29-02-2020 )
        </H2>
        <ul>
          <li>Changelog & versioning</li>
          <li>Motions per representative</li>
          <li>Improvements on new motion request </li>
          <li>Search in representatives</li>
          <li>Footer improvements</li>
          <li> Social section for representatives</li>
        </ul>
      </VersionSection>
      <VersionSection>
        <H2 p="16px" m="0" color="primary" fontSize="18px">
          Version 0.1.0 ( 28-02-2020 )
        </H2>
        <ul>
          <li>Project setup </li>
          <li>Representative list </li>
          <li>Motion list</li>
          <li>Motion Detail</li>
          <li>Representative detail</li>
          <li> New Motion page ( first version )</li>
        </ul>
      </VersionSection>
    </ChangeLogContainer>
  );
};

const VersionSection = styled.div`
  background-color: white;
  padding: 16px;
  margin: 16px auto;
`;

const ChangeLogContainer = styled.div`
  padding: 16px;
`;

export default Changelog;
