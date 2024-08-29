export type TImage = 'png' | 'jpg' | 'jpeg' | 'heic';

type TGetPublicAssetPathParams = {
  filename?: string;
  dir?: string;
  type?: TImage;
};

/**
 * Get the asset path based on the given parameters
 * @param TGetAssetPathParams params
 * @param string params.filename
 * @param string params.dir
 * @returns string
 * @example
 * getPublicAssetPath({ filename: 'default.png', dir: 'common' })
 * // '/public/assets/common/default.png'
 *
 * getPublicAssetPath({ filename: 'default.png' })
 * // '/public/assets/common/default.png'
 *
 * getPublicAssetPath({ dir: 'common' })
 * // '/public/assets/common/default.png'
 *
 * getPublicAssetPath()
 * // '/public/assets/common/default.png'
 */
export const getPublicAssetPath = (params?: TGetPublicAssetPathParams) => {
  const dir = params?.dir || 'common';
  const filename = params?.filename || 'default';
  const type = params?.type || 'png';

  return `/assets/${dir}/${filename}.${type}`;
};

export const getSrcAssetPath = (params?: TGetPublicAssetPathParams) => {
  const dir = params?.dir || 'common';
  const filename = params?.filename || 'default.png';

  return `/src/assets/${dir}/${filename}`;
};
