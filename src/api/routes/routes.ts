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
  getEventCategoryRoute: `${baseRoute}/data/event/category`,
};

export const eventRoutes = {
  getEventsRoute: `${baseRoute}/events`,
  getOrganizationEventsRoute: `${baseRoute}/organization/events`,
  addEventRoute: `${baseRoute}/organization/event/create`,
  updateEventRoute: `${baseRoute}/organization/event/update`,
  deleteEventRoute: `${baseRoute}/organization/event/delete`,
  getUserEventsRoute: `${baseRoute}/user/events`,
  addUserEventJoinRoute: `${baseRoute}/user/event/join`,
  deleteUserEventLeaveRoute: `${baseRoute}/user/event/leave`,
  updateCollaboratorsEventListRoute: `${baseRoute}/organization/event/update/collaborators`,
  addEventActivityRoute: `${baseRoute}/organization/event/activity/create`,
  getEventActivitiesRoute: `${baseRoute}/organization/event/activities`,
  rateEventActivityRoute: `${baseRoute}/organization/event/activity/rate`,
};