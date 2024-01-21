import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IModeContext {
  state: "calm" | "alert"
  newcalls: object;
  checkedoutcalls: string[];
}

const Calls = createSlice({
  name: "calls",
  initialState: {
    state: "calm",
    newcalls: [],
    checkedoutcalls: []
  } as IModeContext,

  reducers: {
    setState: (state, action) => {
      return { ...state, state: action.payload };
    },
    setNewCalls: (state, action) => {
      return { ...state, newcalls: action.payload };
    },
    checkoutNewCall: (state, action) => {
      // const newCallId = action.payload;
      // return {
      //   ...state,
      //   checkedoutcalls: [...state.checkedoutcalls, newCallId],
      // };
      return {
        ...state, checkedoutcalls: action.payload,
      };
    },
    setCalls: (state, action) => {
      const newCallId = action.payload;
      return {
        ...state,
        checkedoutcalls: [...state.checkedoutcalls, newCallId],
      };
    },
  },
});

export const selectCheckoutedCalls = (state: RootState) => state.calls.checkedoutcalls;
export const selectNewCalls = (state: RootState) => state.calls.newcalls;
export const { setState, setNewCalls, checkoutNewCall, setCalls } = Calls.actions;
export default Calls.reducer;
