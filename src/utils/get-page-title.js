import defaultSettings from '@/settings'

const title = defaultSettings.title || '321开拍网'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
