import ButtonCard from './ButtonCard'
import { useTheme } from '~/components/Providers'

//首页中“最佳实践”的组件


const Frameworks = () => {
  const { isDarkMode } = useTheme()

  const frameworks = [

    {
      name: 'Posts社交网络论坛',
      logo: {
        light: '/docs/img/libraries/vuejs-icon.svg',
        dark: '/docs/img/libraries/vuejs-icon.svg',
      },
      href: '/guides/example/PostsForum',
    },
    {
      name: 'Web实时游戏场',
      logo: {
        light: '/docs/img/libraries/vuejs-icon.svg',
        dark: '/docs/img/libraries/vuejs-icon.svg',
      },
      href: '/guides/example/Playground',
    },
    {
      name: 'Discussbase论坛',
      logo: {
        light: '/docs/img/libraries/nextjs-light-icon.svg',
        dark: '/docs/img/libraries/nextjs-light-icon.svg',
      },
      href: '/guides/example/DiscussbaseForum',
    },

    {
      name: 'Super课表小程序',
      logo: {
        light: '/docs/img/libraries/wechat.svg',
        dark: '/docs/img/libraries/wechat.svg',
      },
      href: '/guides/example/timetable',
    },
    {
        name: 'BBS论坛小程序',
        logo: {
          light: '/docs/img/libraries/wechat.svg',
          dark: '/docs/img/libraries/wechat.svg',
        },
        href: '/guides/example/helloBBS',
      },

      {
        name: '微信小程序聊天室',
        logo: {
          light: '/docs/img/libraries/wechat.svg',
          dark: '/docs/img/libraries/wechat.svg',
        },
        href: '/guides/example/WechatRoom',
      },
      {
          name: '别踩白块游戏小程序',
          logo: {
            light: '/docs/img/libraries/wechat.svg',
            dark: '/docs/img/libraries/wechat.svg',
          },
          href: '/guides/example/notClickWhite',
        },

 
  ]
  return (
    <div className="grid md:grid-cols-12 gap-4">
      {frameworks.map((x) => (
        <div key={x.name} className="col-span-3">
          <ButtonCard
            layout="horizontal"
            to={x.href}
            title={x.name}
            // [Joshen] Nice to have: theming
            icon={isDarkMode ? x.logo.dark : x.logo.light}
          />
        </div>
      ))}
    </div>
  )
}

export default Frameworks
