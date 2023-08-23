import Swal from "sweetalert2";
import { createJobApi, getAllJobsApi, getJobByIdApi } from "../../Api/Api";
import { CREATE_JOB, FETCH_ALL_JOBS, FETCH_BY_ID } from "../types/types";

export const createJob = (body, setLoading, navigate) => async (dispatch) => {
  setLoading(true);
  try {
    const job = await createJobApi(body);
    setLoading(false);
    Swal.fire("Blog Created Successfully!", "", "success").then(() => {
      navigate("/Home");
    });
    dispatch({ type: CREATE_JOB, payload: job });
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};
export const getAllJobs = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const job = await getAllJobsApi();
    setLoading(false);
    dispatch({
      type: FETCH_ALL_JOBS,
      payload: job?.data,
    });
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};
export const getSingleJob = (id, setGlobalLoading) => async (dispatch) => {
  setGlobalLoading(true);
  try {
    const job = await getJobByIdApi(id);
    setGlobalLoading(false);
    dispatch({ type: FETCH_BY_ID, payload: job?.data?.job });
  } catch (err) {
    console.log(err);
    setGlobalLoading(false);
  }
};
