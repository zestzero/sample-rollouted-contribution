import { getShardId } from './shard';

describe('shard', () => {
  it.each([['33155c4d-cbe4-4196-8d4f-59c412a177b3', 51]])(
    'should return correct shard',
    (uuid: string, expectedShardId: number) => {
      expect(getShardId(uuid, 100)).toEqual(expectedShardId);
    }
  );
});
