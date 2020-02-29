import React, { useEffect, useState } from 'react';
import { useRepresentatives } from '../../../utils/useRepresentatives';
import styled from 'styled-components';
import { H1 } from '../../atoms/Typography';
import { Label } from '../../organisms/MotionMetaData';
import GatsbyImage from 'gatsby-image';
import Input from '../../atoms/Input';
import { InputContainer } from '../../atoms/Input/InputContainer';
import useDebounce from '../../../utils/useDebounce';
import { filterRepresentatives } from '../../../utils/filterRepresentatives';
import Card from '../../atoms/Card';
import media from 'styled-media-query';
import RepresentativeShort from '../../molecules/RepresentativeShort';

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
      <Card>
        <InputContainer>
          <Label htmlFor="name">Zoeken</Label>
          <Input id="search" type="text" name="search" onChange={onSearch} />
        </InputContainer>
      </Card>

      {representativesState.map(r => (
        <RepresentativeShort key={r.unique_id} representative={r} />
      ))}
    </RepresentativesContainer>
  );
};

export const Avatar = styled(GatsbyImage)`
  width: 70px;
  height: 70px;
  border-radius: 30px;
  margin: 8px;

  ${media.greaterThan('medium')`
    width: 90px;
    height: 90px;
  `}
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr 90px;
  grid-gap: 16px;

  ${media.greaterThan('medium')`
    grid-template-columns: 120px 1fr 120px;
  `}
`;

export const BottomSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`;

const RepresentativesContainer = styled.div`
  padding: 16px 0;
  ${media.greaterThan('medium')`
      padding: 16px;
  `}
`;

export default Representatives;
