import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader'

let cachedFont: Font | null = null

export const loadFont = async (url: string): Promise<Font> => {
  if (cachedFont) return cachedFont

  const loader = new FontLoader()
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (font) => {
        cachedFont = font
        resolve(font)
      },
      undefined,
      reject
    )
  })
}
