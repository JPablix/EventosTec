// Axios
import axios from "axios";
// Routes
import { eventRoutes } from "../routes/routes";

const {
  getEventsRoute,
  getOrganizationEventsRoute,
  addEventRoute,
  updateEventRoute,
  deleteEventRoute,
  addUserEventJoinRoute,
  getUserEventsRoute,
  deleteUserEventLeaveRoute,
} = eventRoutes;

export const getAllEvents = async () => {
  try {
    const response = await axios.get(getEventsRoute);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getOrganizationEvents = async () => {
  try {
    const response = await axios.get(getOrganizationEventsRoute);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getUserEvents = async () => {
  try {
    const response = await axios.get(getUserEventsRoute);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const addEvent = async (props: any) => {
  try {
    const response = await axios.post(addEventRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const updateEvent = async (props: any) => {
  try {
    const response = await axios.put(updateEventRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteEvent = async (id: any) => {
  try {
    const url = `${deleteEventRoute}/${id}`;
    const response = await axios.delete(url);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const joinUserToEvent = async (props: any) => {
  try {
    const response = await axios.put(addUserEventJoinRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const leaveUserFromEvent = async (props: any) => {
  try {
    const response = await axios.put(deleteUserEventLeaveRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};