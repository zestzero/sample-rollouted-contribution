import { v4 as uuid4 } from 'uuid';

import { getShardId } from './lib/shard';

// PERCENTAGE
const STEPS = [1, 2, 5, 10, 20, 50, 100];
const SAMPLE_SIZE = 600000;

const sample = () => {
  console.log(`Start Sampling SAMPLE_SIZE: ${SAMPLE_SIZE}`);
  const sampleData = createSampleData(SAMPLE_SIZE);
  const result = sampleData.map((hash) => ({
    hash,
    shard: getShardId(hash),
  }));

  STEPS.forEach((step) => {
    printContribution(
      result.map((r) => r.shard),
      step // Percentile
    );
  });
};

const createSampleData = (length: number): readonly string[] =>
  Array.from({ length }, (_, i) => i).map(() => uuid4());

const printContribution = (data: readonly number[], percentile: number) => {
  const result = data.filter((d) => d <= percentile);
  console.log(`Percentage ${percentile} : ${result.length}`);
};

export default sample;
