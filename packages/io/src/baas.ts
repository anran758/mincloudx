export function getBaaS() {
  if (global?.BaaS) {
    return global?.BaaS;
  }

  throw new Error('BaaS is not initialized.');
}
