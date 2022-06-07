export type Mode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * 同步压缩数据 - mode 压缩等级 默认为7
 * 需要自己捕捉错误 try catch
 * @param input 输入数据
 */
export function compress(
  input: string | Uint8Array | ArrayBuffer
): Uint8Array | null;
/**
 * 同步压缩数据
 * * 需要自己捕捉错误 try catch
 * @param input 输入数据
 * @param mode 压缩等级
 */
export function compress(
  input: string | Uint8Array | ArrayBuffer,
  mode: Mode
): Uint8Array | null;
/**
 * 异步压缩数据
 * @param input 输入数据
 * @param mode 压缩等级
 * @param onFinish 完成回调
 * @param onProgress 进度回调，如无法正确处理进度，则只调用一次，为-1
 */
export function compress(
  input: string | Uint8Array | ArrayBuffer,
  mode: Mode,
  onFinish: (result: Uint8Array | null, error: Error | null) => void,
  onProgress?: (percentage: number) => void
);

/**
 * 同步解压数据
 * 需要自己捕捉错误 try catch
 * @param byteArray 压缩数据 arraybuffer 类型
 */
export function decompress(
  byteArray: Uint8Array | ArrayBuffer
): string | Uint8Array | null;
/**
 * 异步解压数据
 * @param byteArray 压缩数据 arraybuffer 类型
 * @param onFinish 完成回调
 * @param onProgress 进度回调，如无法正确处理进度，则只调用一次，为-1
 */
export function decompress(
  byteArray: Uint8Array | ArrayBuffer,
  onFinish: (result: string | Uint8Array | null, error: Error | null) => void,
  onProgress?: (percentage: number) => void
);
