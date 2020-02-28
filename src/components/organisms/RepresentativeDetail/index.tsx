import React from 'react';
import styled from 'styled-components';
import { Label, MetaDataItem } from '../MotionMetaData';
import { Paragraph } from '../../atoms/Typography';
import {
  Avatar,
  BottomSection,
  TopSection,
} from '../../templates/Representatives';
import { Representative } from '../../../utils/extractRepresentatives';
import { usePictures } from '../../../utils/usePictures';
import PageShell from '../PageShell';
import { StyledLink } from '../../atoms/Link';

interface DynamicTemplateComponentProps {
  pageContext: {
    data: Representative;
  };
}

const RepresentativeDetail: React.FC<DynamicTemplateComponentProps> = ({
  pageContext: { data },
}) => {
  const [pictures] = usePictures(['default_avatar']);

  const representative = data;
  return (
    <PageShell>
      <RepresentativeDetailContainer>
        <StyledLink type="primary" to={`/representatives/`}>
          Terug naar alle leden
        </StyledLink>
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
        </BottomSection>
      </RepresentativeDetailContainer>
    </PageShell>
  );
};

const RepresentativeDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  background-color: white;
  padding: 24px;
`;

export default RepresentativeDetail;
