import store from '@/store'
import { $themeConfig } from '../../../themeConfig'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://ping.pub/logo.svg',
    })
  }
  chainMenus.push({ header: 'CONTACT LINKS' })
  chainMenus.push({
    title: 'Github',
    href: $themeConfig.links.github,
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: $themeConfig.links.twitter,
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Telegram',
    href: $themeConfig.links.telegram,
    icon: 'SendIcon',
  })

  return chainMenus
}

export default processMenu()
