import { createBrowserRouter } from 'react-router-dom'
import { Root } from '../components/Root.tsx'
import { WelcomeLayout } from '../layouts/WelcomeLayout'
import {Home} from '../pages/Home.tsx';
import {ItemsPage} from '../pages/ItemsPage.tsx';
import { Welcome1 } from '../pages/Welcome1'
import { Welcome2 } from '../pages/Welcome2'
import { Welcome3 } from '../pages/Welcome3'
import { Welcome4 } from '../pages/Welcome4'
import {SignInPage} from '../pages/SignInPage.tsx';
import {ItemsNewPage} from '../pages/ItemsNewPage.tsx';
import {TagsNewPage} from '../pages/TagsNewPage.tsx';
import {TagsEditPage} from '../pages/TagsEditPage.tsx';
import {StatisticsPage} from '../pages/StatisticsPage.tsx';



export const router = createBrowserRouter([
  { path: '/', element: <Root />, },
  { path: '/home', element: <Home title="首页"/> },
  {
    path: '/welcome',
    element: <WelcomeLayout />,
    children:[
      { path: '1', element: <Welcome1 /> },
      { path: '2', element: <Welcome2 /> },
      { path: '3', element: <Welcome3 /> },
      { path: '4', element: <Welcome4 /> },
    ]
  },
  { path: '/items', element: <ItemsPage/> },
  { path: '/items/new', element: <ItemsNewPage/> },
  { path: '/tags/new', element: <TagsNewPage /> },
  { path: '/tags/:id', element: <TagsEditPage /> },

  { path: '/tags', element: <div>标签</div> },
  { path: '/sign_in', element: <SignInPage /> },
  { path: '/statistics', element: <StatisticsPage/> },
  { path: '/export', element: <div>敬请期待</div> },
  { path: '/noty', element: <div>敬请期待</div> },
])
