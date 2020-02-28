export interface Representative {
  name: string;
  fraction: string;
  id: string;
  unique_id: string;
  imageUrl: string;
  number: number;
  role: string;
  description: string;
  socials: [
    {
      type: string;
      url: string;
    },
    {
      type: string;
      url: string;
    },
  ];
}

export const extractRepresentatives: (
  representativesData,
) => Representative[] = representativesData => {
  return representativesData.allRepresenativesJson.edges[0].node
    .representatives;
};
