import type {ReactNode} from 'react';
import {useEffect,useRef,useState} from 'react'
import { animated, useTransition } from '@react-spring/web'
import {useLocation, useOutlet,useNavigate} from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import {useSwipe} from '../hooks/useSwipe.tsx';
import {useLocalStore} from '../stores/useLocalStore.tsx'
const linkMap:Record<string, string> = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/xxx',
}

export const WelcomeLayout:React.FC = ()=>{
  const animating = useRef(false)
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const [extraStyle, setExtraStyle] = useState<{ position: 'relative' | 'absolute' }>({ position: 'relative' })
  const transitions = useTransition(location.pathname, {
    // 进入状态
    from: { transform: 'translateX(100%)' },
    // 稳定状态
    enter: { transform: 'translateX(0%)' },
    // 退出状态
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 },
    onStart: () => {
      setExtraStyle({ position: 'absolute' })
    },
    onRest: () => {
      animating.current = false
      setExtraStyle({ position: 'relative' })
    }
  })
  const main = useRef<HTMLElement>(null)
  const { direction } = useSwipe(main)
  const nav = useNavigate()
  useEffect(() => {
    if (direction === 'left') {
      if (animating.current) { return }
      animating.current = true
      nav(linkMap[location.pathname])
    }
  }, [direction, location.pathname, linkMap])
  const {setHasReadWelcomes} = useLocalStore()
  const onSkip =()=>{
    setHasReadWelcomes(true)
    nav('/welcome/xxx')
  }

  return (
    <div className="bg-#5f34b h-screen flex flex-col items-stretch pb-16px" >
      <span fixed text-white top-16px right-16px text-32px onClick={onSkip}>跳过</span>
      <header shrink-0 text-center pt-64px>
        <img src={logo} w-64px  h-69px />
        <h1 text="#D4D4ee" text-32px>pigMoney</h1>
      </header>
      <main shrink-1 grow-1  relative ref={main}>
        {transitions((style, pathname) =>
          <animated.div key={pathname} style={{ ...style, ...extraStyle }} w="100%" h="100%" p-16px flex>
          <div grow-1 bg-white flex justify-center items-center rounded-8px>
            {map.current[pathname]}
          </div>
        </animated.div>
        )}
      </main>
    </div>
  )
}
