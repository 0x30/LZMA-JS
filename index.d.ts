export type Mode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function compress(
  input: string | Uint8Array | ArrayBuffer,
  mode: Mode,
  onFinish: (result: Uint8Array | null, error: Error | null) => void,
  onProgress?: (percentage: number) => void
);

export function decompress(
  byteArray: Uint8Array | ArrayBuffer,
  onFinish: (result: string | Uint8Array | null, error: Error | null) => void,
  onProgress?: (percentage: number) => void
);
