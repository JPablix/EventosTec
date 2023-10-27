// Routes
import { userRoutes, authRoutes } from "../routes/routes";
// Axios
import axios from "axios";

const {
  getProfileRoute,
  updateProfileRoute,
  getOrganizationMembersRoute,
  addOrganizationMemberRoute,
  deleteOrganizationMemberRoute,
} = userRoutes;

export const updateProfile = async (props: any) => {
  try {
    const response = await axios.put(updateProfileRoute, props);
    return response;
  } catch (error: any) {
    return error.response.message;
  }
};

export const getProfileInfo = async () => {
  try {
    const response = await axios.get(getProfileRoute);
    console.log(JSON.stringify(response));
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getMembers = async () => {
  try {
    const response = await axios.get(getOrganizationMembersRoute);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const addMember = async (props: any) => {
  try {
    const response = await axios.put(addOrganizationMemberRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteMember = async (props: any) => {
  try {
    const response = await axios.put(deleteOrganizationMemberRoute, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};