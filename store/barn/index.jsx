import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  barn: [],
  workers: [],
};

export const farmSlice = createSlice({
  name: "farm",
  initialState,
  reducers: {
    setBarn: (state, action) => {
      const { cows } = action.payload;
      if (!state.barn.length) {
        for (let index = 0; index < cows; index++) {
          state.barn = [
            ...state.barn,
            {
              id: index,
              name: "Cow " + (index + 1),
              hunger: 0,
              milk: 0,
            },
          ];
          state.workers = [
            ...state.workers,
            {
              id: index,
              name: "Robot " + (index + 1),
              score: 0,
            },
          ];
        }
      }
    },
    clearBarn: (state, action) => {
      state.barn = [];
    },
    feedCow: (state, action) => {
      const { cowId, robotId } = action.payload;
      const cow = state.barn[cowId];
      const robot = state.workers[robotId];

      cow.hunger -= 1;
      robot.score += 1;
    },
    milkCow: (state, action) => {
      const { cowId, robotId } = action.payload;
      const cow = state.barn[cowId];
      const robot = state.workers[robotId];

      cow.milk = cow.milk > 0 ? cow.milk - 1 : cow.milk;
      robot.score += 1;
    },
    cowHunger: (state) => {
      for (const cow of state.barn) {
        if (cow.hunger < 10) {
          cow.hunger += Math.floor(Math.random() * 3) + 1;
        }
      }
    },
    cowMilk: (state) => {
      for (const cow of state.barn) {
        console.log("cow.milk", cow.milk);
        console.log("cow.hunger", cow.hunger);
        if (cow.milk < 10 && cow.hunger < 10) {
          cow.milk += Math.floor(Math.random() * 3) + 1;
        }
      }
    },
  },
});

export const { setBarn, clearBarn, feedCow, milkCow, cowMilk, cowHunger } =
  farmSlice.actions;
export default farmSlice.reducer;
