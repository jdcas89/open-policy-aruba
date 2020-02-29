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
          Version 0.1
        </H2>
        <ul>
          <li>Project setup </li>
          <li>Leden lijst </li>
          <li>Motie lijst</li>
          <li>Motie Detail</li>
          <li>Leden detail</li>
          <li> New Motie pagina ( eerste versie )</li>
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
