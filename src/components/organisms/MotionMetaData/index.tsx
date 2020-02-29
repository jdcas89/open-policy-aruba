import React from 'react';
import { Paragraph } from '../../atoms/Typography';
import styled from 'styled-components';
import { Motion } from '../../../utils/extractMotions';
import media from 'styled-media-query';

const MotionMetaData: React.FC<{ motion: Motion }> = ({ motion }) => {
  const voteAgainst = motion.voting.filter(vote => vote.vote === 'Disagree');
  const voteInFavor = motion.voting.filter(vote => vote.vote === 'Agree');
  const absent = motion.voting.length - voteAgainst.length - voteInFavor.length;
  return (
    <MetaDataContainer>
      <MetaDataItem>
        <Label>Datum:</Label>
        <Paragraph>{motion.date}</Paragraph>
      </MetaDataItem>
      <MetaDataItem>
        <Label>Resultaat:</Label>
        <Paragraph>
          <Span color={motion.result === 'Afgewezen' ? 'red' : 'green'}>
            {motion.result}
          </Span>
        </Paragraph>
      </MetaDataItem>
      <MetaDataItem>
        <Label>Stemmen:</Label>
        <Paragraph>{motion.voting.length}</Paragraph>
      </MetaDataItem>
      <MetaDataItem>
        <Label>Voor:</Label>
        <Paragraph>
          <Span color="green">{voteInFavor.length}</Span>
        </Paragraph>
      </MetaDataItem>
      <MetaDataItem>
        <Label>Tegen:</Label>
        <Paragraph>
          <Span color="red">{voteAgainst.length}</Span>
        </Paragraph>
      </MetaDataItem>
      <MetaDataItem>
        <Label>Afwezig:</Label>
        <Paragraph>
          <Span color="black"> {absent}</Span>
        </Paragraph>
      </MetaDataItem>
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
