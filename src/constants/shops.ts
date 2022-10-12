import { Page } from 'playwright'
import { ShopType } from './types'

export const shops: ShopType[] = [
  {
    name: 'ripley',
    url: 'https://simple.ripley.cl/audifonos-wh-1000xm3-negro-sony-bluetooth-mpm00008840194?s=mdco',
    checkStock: async (page: Page) => {
      const content = await page.textContent('.product-buy-options')
      return content.includes('Agotado') === false
    },
  },
  {
    name: 'laPolar',
    url: 'https://www.lapolar.cl/audifonos-bluetooth-sony-wh-1000xm3bm-negros%C2%A0/21937061.html',
    checkStock: async (page: Page) => {
      const content = await page.textContent('.add-to-cart')
      return content.includes('Agotado') === false
    },
  },
  {
    name: 'solotodo',
    url: 'https://www.solotodo.cl/products/90861-microsoft-xbox-series-s',
    checkStock: async (page: Page) => {
      const content = await page.textContent('.ml-2')
      console.log(content)
      return (
        content.includes('Avísame cuando vuelva a estar disponible') === false
      )
    },
  },
]
