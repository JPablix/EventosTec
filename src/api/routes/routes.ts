const baseRoute = "https://campustecgatoapi-ccf0e8a36684.herokuapp.com/api";

export const authRoutes = {
  loginRoute: `${baseRoute}/login`,
  logoutRoute: `${baseRoute}/logout`,
  registerRoute: `${baseRoute}/register`,
};

export const userRoutes = {
  getProfileRoute: `${baseRoute}/profile`,
  updateProfileRoute: `${baseRoute}/profile/update`,
  getOrganizationMembersRoute: `${baseRoute}/organization/members`,
  addOrganizationMemberRoute: `${baseRoute}/organization/member/join`,
  deleteOrganizationMemberRoute: `${baseRoute}/organization/member/delete`,
};

export const dataRoutes = {
  getCarrersRoute: `${baseRoute}/data/carrers`,
  getEventCategoriesRoute: `${baseRoute}/data/event/categories`,
};

export const eventRoutes = {
  getEventsRoute: `${baseRoute}/events`,
  getOrganizationEventsRoute: `${baseRoute}/organization/events`,
  addEventRoute: `${baseRoute}/organization/event/create`,
  getUserEventsRoute: `${baseRoute}/user/events`,
  addUserEventJoinRoute: `${baseRoute}/user/event/join`,
};