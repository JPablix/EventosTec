// Routes
import { userRoutes } from "../routes/routes";
// Axios
import axios from "axios";

const {
  updateProfileInformation,
  getProfileInformation,
  getOrganizationMembers,
  addOrganizationMember,
  deleteOrganizationMember,
} = userRoutes;

export const updateProfileInfo = async (props: any) => {
  try {
    const response = await axios.put(updateProfileInformation, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getProfileInfo = async () => {
  try {
    const response = await axios.get(getProfileInformation);
    console.log(JSON.stringify(response));
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getMembers = async () => {
  try {
    const response = await axios.get(getOrganizationMembers);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const addMember = async (props: any) => {
  try {
    const response = await axios.put(addOrganizationMember, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteMember = async (props: any) => {
  try {
    const response = await axios.put(deleteOrganizationMember, props);
    return response;
  } catch (error: any) {
    return error.response;
  }
};