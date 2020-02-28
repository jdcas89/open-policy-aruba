export interface RepresentativeRef {
  id: string;
  vote: string;
}

export interface Motion {
  id: string;
  unique_id: string;
  name: string;
  motionNumber: string;
  description: string[];
  decision: string[];
  voting: RepresentativeRef[];
  fraction: string;
  title: string;
  result: string;
  date: string;
}

export const extractMotions = motionData => {
  const motions: Motion[] = [];
  motionData.allMotionsJson.edges.forEach(motion => {
    motions.push({
      ...motion.node,
    });
  });
  return motions;
};
