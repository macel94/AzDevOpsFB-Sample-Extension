// Define the patch operation types
export interface JsonPatchOperation {
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
  path: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  value?: any;
}
