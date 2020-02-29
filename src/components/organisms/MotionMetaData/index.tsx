import React, { useEffect, useState } from 'react';
import { Paragraph } from '../../atoms/Typography';
import styled from 'styled-components';
import { Motion } from '../../../utils/extractMotions';
import media from 'styled-media-query';
import {
  calculateVotingData,
  VotingData,
} from '../../../utils/calculateVotingData';

const MotionMetaData: React.FC<{ motion: Partial<Motion> }> = ({ motion }) => {
  const [votingData, setVotingData] = useState<VotingData>(
    calculateVotingData(motion),
  );

  const calculateVotes = () => {
    if (motion?.voting?.length > 0) {
      setVotingData(calculateVotingData(motion));
    }
  };

  useEffect(() => {
    calculateVotes();
  }, [motion]);
  return (
    <MetaDataContainer>
      {!motion && <Paragraph>Geen resultaat</Paragraph>}
      {motion?.date && (
        <MetaDataItem>
          <Label>Datum:</Label>
          <Paragraph>{motion.date}</Paragraph>
        </MetaDataItem>
      )}
      {motion?.result && (
        <MetaDataItem>
          <Label>Resultaat:</Label>
          <Paragraph>
            <Span color={motion.result === 'Afgewezen' ? 'red' : 'green'}>
              {motion.result}
            </Span>
          </Paragraph>
        </MetaDataItem>
      )}
      {motion?.voting && (
        <>
          <MetaDataItem>
            <Label>Stemmen:</Label>
            <Paragraph>{motion?.voting?.length}</Paragraph>
          </MetaDataItem>
          <MetaDataItem>
            <Label>Voor:</Label>
            <Paragraph>
              <Span color="green">{votingData.votesInFavor}</Span>
            </Paragraph>
          </MetaDataItem>
          <MetaDataItem>
            <Label>Tegen:</Label>
            <Paragraph>
              <Span color="red">{votingData.votesAgainst}</Span>
            </Paragraph>
          </MetaDataItem>
          <MetaDataItem>
            <Label>Afwezig:</Label>
            <Paragraph>
              <Span color="black"> {votingData.asbsentVotes}</Span>
            </Paragraph>
          </MetaDataItem>
        </>
      )}
    </MetaDataContainer>
  );
};

export const Label = styled.label`
  font-weight: bold;
`;

export const MetaDataItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaDataContainer = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  `}
`;

export const Span = styled.span<{ color?: string }>`
  color: ${({ color }) => color};
`;

export default MotionMetaData;
