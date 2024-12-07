enum ROUTE_NAMES {
  /** Проекты */
  home = 'home',
  /** Авторы */
  authors = 'authors',
  /** Сообщества */
  community = 'community',
  /** Модели */
  models = 'models',
  /** Модель детально */
  modelDetail = 'modelDetail',
  /** Создание модели */
  modelCreate = 'addNewModel',
}

type RouteFn<TParams = Record<string, string | number>> = (params: TParams) => string;

export interface WithModelUuid {
  modelUUID: string,
}

const genUrlModelDetail: RouteFn<WithModelUuid> = () => `/modelDetail`;
// const genUrlModelDetail: RouteFn<WithModelUuid> = ({ modelUUID }) => `/models/${modelUUID}`;

export const ROUTES = {
  [ROUTE_NAMES.authors]: '/authors',
  [ROUTE_NAMES.community]: '/community',
  [ROUTE_NAMES.home]: '/',
  [ROUTE_NAMES.models]: '/models',
  [ROUTE_NAMES.modelDetail]: genUrlModelDetail,
  [ROUTE_NAMES.modelCreate]: '/addNewModel'
}
