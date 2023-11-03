import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', `Ком'юніті`)

page.append(title)

//==

const NAVIGATION_LIST = [
  { title: 'База знань', viewed: true },
  { title: 'Інформація', viewed: false },
]

const createNavigation = () => {
  const navList = createElement('div', 'navigation')

  NAVIGATION_LIST.forEach((navData) => {
    const navItem = createElement(
      'button',
      navData.viewed
        ? 'navItem navItem--viewed'
        : 'navItem',
      navData.title,
    )
    navList.append(navItem)
  })

  return navList
}

const nav = createNavigation()
page.append(nav)

const IMAGE = [
  { width: 345, height: 163, src: '/img/community.png' },
]

const BUTTON_COMMUNITY = [
  { name: `Перейти до ком'юніті у Телеграм` },
]

const INFO = [
  {
    title: 'Що таке база знань?',
    text: 'База знань — сукупність систематизованих основних відомостей, що стосуються певної галузі знань і засобів, за допомогою яких відбуваються накопичення, збереження, оновлення та використання знань.',
  },
]

const createCommunity = () => {
  const content = createElement(
    'main',
    'community__content',
  )

  IMAGE.forEach((params) => {
    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    content.append(img)
  })

  //====

  const infoCommunity = createElement(
    'div',
    'community__info',
  )

  content.append(infoCommunity)

  INFO.forEach((param) => {
    const infoTitle = createElement(
      'div',
      'info__title',
      param.title,
    )

    const infoText = createElement(
      'div',
      'info__text',
      param.text,
    )

    infoCommunity.append(infoTitle)
    infoCommunity.append(infoText)
  })

  // ====

  BUTTON_COMMUNITY.forEach((param) => {
    const buttonComunity = createElement(
      'button',
      'button__forward',
      param.name,
    )

    content.append(buttonComunity)
  })

  return content
}

const community = createCommunity()
page.append(community)
