import React from 'react';
import styled from 'styled-components';
import { Label, MetaDataItem } from '../MotionMetaData';
import { H1, Paragraph } from '../../atoms/Typography';
import {
  Avatar,
  BottomSection,
  TopSection,
} from '../../templates/Representatives';
import { Representative } from '../../../utils/extractRepresentatives';
import { usePictures } from '../../../utils/usePictures';
import PageShell from '../PageShell';
import { StyledLink } from '../../atoms/Link';
import SocialLinks from '../../molecules/SocialLinks';
import { useMotionList } from '../../../utils/useMotionList';
import MotionList from '../MotionList';

interface DynamicTemplateComponentProps {
  pageContext: {
    data: Representative;
  };
}

const RepresentativeDetail: React.FC<DynamicTemplateComponentProps> = ({
  pageContext: { data },
}) => {
  const [pictures] = usePictures(['default_avatar']);
  const [motions] = useMotionList();
  const motionsForRepresentative = motions.filter(m => {
    const hasVoted = m.voting.filter(v => v.id === data.unique_id);

    if (hasVoted.length > 0) {
      return m;
    }
    return null;
  });

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
          <MetaDataItem>
            <SocialLinks type="primary" socialLinks={representative.socials} />
          </MetaDataItem>
        </BottomSection>
      </RepresentativeDetailContainer>
      <MotionList
        representative={representative}
        motions={motionsForRepresentative}
      />
    </PageShell>
  );
};

const MotionsSection = styled.div``;

const RepresentativeDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  background-color: white;
  padding: 24px;
`;

export default RepresentativeDetail;
