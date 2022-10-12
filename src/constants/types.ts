import { Page } from 'playwright'

export type ShopType = {
  name: string
  url: string
  checkStock: (page: Page) => Promise<boolean>
}
