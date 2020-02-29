import React from 'react';
import { Representative } from '../../../utils/extractRepresentatives';
import { usePictures } from '../../../utils/usePictures';
import { Label, MetaDataItem } from '../../organisms/MotionMetaData';
import { Paragraph } from '../../atoms/Typography';
import { StyledLink } from '../../atoms/Link';
import {
  Avatar,
  BottomSection,
  TopSection,
} from '../../templates/Representatives';
import styled from 'styled-components';
import Card from '../../atoms/Card';
import FractionLogo from '../../atoms/FractionLogo';
import media from 'styled-media-query';

const RepresentativeShort: React.FC<{ representative: Representative }> = ({
  representative,
}) => {
  const [pictures] = usePictures(['default_avatar']);
  return (
    <RepresentativeContainer>
      <TopSection>
        <Avatar fluid={pictures.default_avatar} alt={representative.name} />{' '}
        <MetaDataItem>
          <Label>Naam:</Label>
          <Paragraph>{representative.name}</Paragraph>
        </MetaDataItem>
        <MetaDataItem>
          <Label>Fractie:</Label>
          <FractionLogo
            fraction={representative.fraction.toLocaleLowerCase()}
          />
        </MetaDataItem>
      </TopSection>
      <BottomSection>
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

const RepresentativeContainer = styled(Card)`
  display: grid;
  grid-template-columns: 1fr;
  ${media.greaterThan('medium')`
    grid-template-columns: 340px 1fr;
  `}
`;

export default RepresentativeShort;
