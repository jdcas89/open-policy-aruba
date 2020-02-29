import React, { useEffect, useState } from 'react';
import { useRepresentatives } from '../../../utils/useRepresentatives';
import styled from 'styled-components';
import { H1, Paragraph } from '../../atoms/Typography';
import { Representative } from '../../../utils/extractRepresentatives';
import { Label, MetaDataItem } from '../../organisms/MotionMetaData';
import { usePictures } from '../../../utils/usePictures';
import GatsbyImage from 'gatsby-image';
import { StyledLink } from '../../atoms/Link';
import Input from '../../atoms/Input';
import { InputContainer } from '../../atoms/Input/InputContainer';
import useDebounce from '../../../utils/useDebounce';
import { filterRepresentatives } from '../../../utils/filterRepresentatives';

const Representatives = () => {
  const [representatives] = useRepresentatives();

  const [representativesState, setRepresentativesState] = useState(
    representatives,
  );
  const [search, setSearch] = useState();
  const debouncedValue = useDebounce(search, 800);

  const onSearch = e => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    setRepresentativesState(filterRepresentatives(representatives, search));
  }, [debouncedValue]);

  return (
    <RepresentativesContainer>
      <H1 m="8px 0" color="primary" fontSize="24px">
        Leden van Parlement
      </H1>
      <InputContainer>
        <Label htmlFor="name">Zoeken</Label>
        <Input id="search" type="text" name="search" onChange={onSearch} />
      </InputContainer>
      {representativesState.map(r => (
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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (min-width: 768px) {
    grid-template-columns: 340px 1fr;
  }
`;

const RepresentativesContainer = styled.div`
  padding: 16px;
`;

export default Representatives;
