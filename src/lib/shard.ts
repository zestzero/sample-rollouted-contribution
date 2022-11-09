/**
 *
 * @param uuid Item identity
 * @param modulo Using 100 as default since it's percentage of all items
 * @returns
 */
export const getShardId = (uuid: string, modulo = 100): number => {
  const hexToDecimal = parseInt(uuid.substring(0, 2), 16);
  return hexToDecimal % modulo;
};
