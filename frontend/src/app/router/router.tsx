import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../../pages/MainPage.tsx';
import { SignUp } from '../../entities/signup';
import { LogIn } from '../../entities/login';
import { ProjectInfo } from '../../entities/projectInputModal';
import { MyPage, ProjectDetailPage, ProjectWritePage } from '../../pages';
import { ProjectEditPage } from '../../pages/ProjectEditPage.tsx';
import { ProjectPage } from '../../pages/Project/ProjectPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/project/:param',
    element: <ProjectDetailPage />,
  },
  {
    path: '/modal',
    element: <ProjectInfo />,
  },
  {
    path: '/projectwrite',
    element: <ProjectWritePage />,
  },
  {
    path: '/project/edit/:param',
    element: <ProjectEditPage />,
  },
  {
    path: '/project',
    element: <ProjectPage />,
  },
  // {
  //   path: '/2024-summer-bootcamp/:param',
  //   element: <BootCampPage />,
  // },
  // {
  //   path: '/2024-summer-bootcamp/project/:param',
  //   element: <BootCampProjectPage />,
  // },
]);
