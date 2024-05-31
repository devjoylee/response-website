import { Headline } from '@/app/components';
import { NavType } from '@/app/types';

export const navData: NavType[] = [
  {
    id: 0,
    name: 'About',
    url: '/about',
    headline: <Headline width={235} t1='The only about us page' t2='that’s' typer='about you' />,
  },
  {
    id: 1,
    name: 'Services',
    url: '/service',
    headline: <Headline width={185} t1='Services handcrafted' typer='for you' />,
  },
  { id: 2, name: 'Work', url: '/work', headline: <Headline t2='Our work' /> },
];
