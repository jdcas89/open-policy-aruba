import React from 'react';
import { Motion } from '../../../utils/extractMotions';
import PageShell from '../PageShell';
import styled from 'styled-components';
import { StyledLink } from '../../atoms/Link';
import MotionMetaData from '../MotionMetaData';
import { H1 } from '../../atoms/Typography';
import { useRepresentatives } from '../../../utils/useRepresentatives';
import { mapRepresentativesToMotion } from '../../../utils/mapRepresentativesToMotions';
import RepresentativeVote from '../RepresentativeVote';

interface DynamicTemplateComponentProps {
  pageContext: {
    data: Motion;
  };
}

const MotionDetail: React.FC<DynamicTemplateComponentProps> = ({
  pageContext: { data },
}) => {
  const [representatives] = useRepresentatives();
  const mappedMotion = mapRepresentativesToMotion(data, representatives);
  return (
    <PageShell>
      <MotionDetailContainer>
        <MotionMetaDataCard>
          <StyledLink type="primary" to={'/'}>
            Terug naar alle moties
          </StyledLink>
          <H1 color="primary" fontSize="24px">
            {data.title}
          </H1>
          <H1 color="primary" fontSize="18px">
            Fractie: {data.fraction}
          </H1>
          <MotionMetaData motion={data} />
        </MotionMetaDataCard>

        <MotionMetaDataCard>
          <h3>Omschrijving</h3>
          {data.description.map((d, i) => (
            <p key={i}>- {d}</p>
          ))}

          <h3>Besluit</h3>
          {data.decision.map((d, i) => (
            <p key={i}>- {d}</p>
          ))}
        </MotionMetaDataCard>

        <MotionMetaDataCard>
          <h1>Stemmen</h1>
          <StyledTable>
            <thead>
              <tr>
                <th>Stem</th>
                <th>Naam</th>
                <th>Fractie</th>
              </tr>
            </thead>

            <tbody>
              {mappedMotion.mappedVoting.map(vote => (
                <RepresentativeVote key={vote.id} vote={vote} />
              ))}
            </tbody>
          </StyledTable>
        </MotionMetaDataCard>
      </MotionDetailContainer>
    </PageShell>
  );
};

const StyledTable = styled.table`
  max-width: 100%;
  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

const MotionMetaDataCard = styled.div`
  margin: 16px auto;
  padding: 16px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const MotionDetailContainer = styled.div`
  @media (min-width: 768px) {
    padding: 16px;
  }
`;
export default MotionDetail;
