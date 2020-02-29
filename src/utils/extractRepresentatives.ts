import { SocialLink } from '../components/molecules/Footer';

export interface Representative {
  name: string;
  fraction: string;
  id: string;
  unique_id: string;
  imageUrl: string;
  number: number;
  role: string;
  description: string;
  socials: SocialLink[];
}

export const extractRepresentatives: (
  representativesData,
) => Representative[] = representativesData => {
  return representativesData.allRepresenativesJson.edges[0].node
    .representatives;
};
