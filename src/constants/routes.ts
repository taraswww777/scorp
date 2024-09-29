enum ROUTE_NAMES {
  /** Проекты */
  home = 'home',
  /** Авторы */
  authors = 'authors',
  /** Сообщества */
  community = 'community',
}


export const ROUTES: Record<ROUTE_NAMES, string> = {
  [ROUTE_NAMES.authors]: '/authors',
  [ROUTE_NAMES.community]: '/community',
  [ROUTE_NAMES.home]: '/home'
}
