import ButtonCard from './ButtonCard'
import { useTheme } from '~/components/Providers'


// 首页中“SDK文档”组件

const Frameworks = () => {
  const { isDarkMode } = useTheme()

  const frameworks = [

    {
      name: 'JavaScript',
      logo: {
        light: '/docs/img/libraries/javascript-icon.svg',
        dark: '/docs/img/libraries/javascript-icon.svg',
      },
      href: '/reference/javascript',
    },
    {
      name: 'Flutter',
      logo: {
        light: '/docs/img/libraries/flutter-icon.svg',
        dark: '/docs/img/libraries/flutter-icon.svg',
      },
      href: '/reference/dart',
    },

    {
      name: '微信小程序',
      logo: {
        light: '/docs/img/libraries/wechat.svg',
        dark: '/docs/img/libraries/wechat.svg',
      },
      href: '/reference/wechat',
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
