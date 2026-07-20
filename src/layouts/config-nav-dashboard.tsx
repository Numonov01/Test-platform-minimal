import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
  athlete: icon('ic-athlete'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: 'Umumiy',
    items: [
      { title: 'Boshqaruv paneli', path: paths.dashboard.root, icon: ICONS.dashboard },
      { title: "To'garaklar", path: paths.dashboard.course.root, icon: ICONS.course },
      { title: 'Portfoliya', path: paths.dashboard.portfolio.root, icon: ICONS.folder },
      { title: 'Kuzatuv', path: paths.dashboard.live.root, icon: ICONS.parameter },
      { title: 'Moliya', path: paths.dashboard.finance.root, icon: ICONS.banking },
      { title: 'Kasbiy orientatsiya', path: paths.dashboard.orientation.root, icon: ICONS.invoice },
      { title: "Qo'llab-quvvatlash", path: paths.dashboard.faq.root, icon: ICONS.chat },
    ],
  },
  /**
   * Management
   */
  {
    subheader: 'Boshqaruv',
    items: [
      {
        title: 'Foydalanuvchilar',
        path: paths.dashboard.user.root,
        icon: ICONS.user,
        children: [
          { title: "Ro'yxat", path: paths.dashboard.user.list },
          // { title: 'Create', path: paths.dashboard.user.new },
          // { title: 'Edit', path: paths.dashboard.user.demo.edit },
          { title: 'Akkount', path: paths.dashboard.user.account },
        ],
      },
    ],
  },
];
