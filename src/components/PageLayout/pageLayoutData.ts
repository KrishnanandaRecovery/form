interface MenuItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

export const menuItems: MenuItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'Service 1', path: '/services/serv1' },
      { label: 'service 2', path: '/services/serv2' },
      { label: 'service 3', path: '/services/serv3' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];
