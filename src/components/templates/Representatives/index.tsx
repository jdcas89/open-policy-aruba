import React from 'react';
import { useRepresentatives } from '../../../utils/useRepresentatives';
import styled from 'styled-components';
import { H1, Paragraph } from '../../atoms/Typography';
import { Representative } from '../../../utils/extractRepresentatives';
import { Label, MetaDataItem } from '../../organisms/MotionMetaData';
import { usePictures } from '../../../utils/usePictures';
import GatsbyImage from 'gatsby-image';
import { StyledLink } from '../../atoms/Link';

const Representatives = () => {
  const [representatives] = useRepresentatives();
  return (
    <RepresentativesContainer>
      <H1 p="16px" m="0" color="primary" fontSize="24px">
        Leden van Parlement
      </H1>
      {representatives.map(r => (
        <RepresentativeComponent key={r.unique_id} representative={r} />
      ))}
    </RepresentativesContainer>
  );
};

const RepresentativeComponent: React.FC<{ representative: Representative }> = ({
  representative,
}) => {
  const [pictures] = usePictures(['default_avatar']);
  return (
    <RepresentativeContainer>
      <TopSection>
        <Avatar fluid={pictures.default_avatar} alt={representative.name} />
        <MetaDataItem>
          <Label>Naam:</Label>
          <Paragraph>{representative.name}</Paragraph>
        </MetaDataItem>
      </TopSection>
      <BottomSection>
        <MetaDataItem>
          <Label>Fractie:</Label>
          <Paragraph>{representative.fraction}</Paragraph>
        </MetaDataItem>
        <MetaDataItem>
          <Label>Rol:</Label>
          <Paragraph>{representative.role}</Paragraph>
        </MetaDataItem>
        <MetaDataItem>
          <Label>Omschrijving:</Label>
          <Paragraph>{representative.description}</Paragraph>
        </MetaDataItem>
        <MetaDataItem>
          <StyledLink
            type="primary"
            to={`/representatives/${representative.unique_id}`}
          >
            More details
          </StyledLink>
        </MetaDataItem>
      </BottomSection>
    </RepresentativeContainer>
  );
};

export const Avatar = styled(GatsbyImage)`
  width: 90px;
  height: 90px;
  border-radius: 30px;
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 120px 1fr;
  }
`;

export const BottomSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const RepresentativeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding: 24px 16px;
  margin: 24px 0;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  @media (min-width: 768px) {
    grid-template-columns: 340px 1fr;
  }
`;

const RepresentativesContainer = styled.div``;

export default Representatives;
