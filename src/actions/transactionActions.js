import { LOAD_DATA, INSERT, UPDATE, DELETE, UPDATE_INDEX, UPDATE_DATA } from "./types";
import axios from "axios";

export const loadData = () => async (dispatch) => {
  const data = await axios.get(
    "https://randomuser.me/api/?page=1&results=10&seed=abc"
  );

  dispatch({
    type: LOAD_DATA,
    payload: data.data.results,
  });
};

export const insert = (data) => (dispatch) => {
  dispatch({
    type: INSERT,
    payload: data,
  });
};

export const update = (data, i) => (dispatch) => {
  console.log(data,"djkhdwhjdwhdwhd")
  dispatch({
    type: UPDATE,
    payload: { data: data, index: i },
  });
};

export const Delete = (id) => (dispatch) => {
  dispatch({
    type: DELETE,
    payload: id,
  });
};

export const updateIndex = (index) => (dispatch) => {
  dispatch({
    type: UPDATE_INDEX,
    payload: index,
  });
};

export const updateData = (x) => async(dispatch) => {
  const data = await axios.get(
    `https://randomuser.me/api/?page=${x}&results=10&seed=abc`
  );
  dispatch({
    type: UPDATE_DATA,
    payload: data.data.results,
  });
};
