import { useDispatch, useSelector } from "react-redux";
import classes from "./styles.module.scss";
import { feedCow, milkCow } from "../../store/barn";

const Robot = ({ robot }) => {
  const dispach = useDispatch();
  const { barn } = useSelector((state) => state.farm);
  const findCow = barn[robot.id];

  const handleFeeding = (e) => {
    e.preventDefault;
    if (!findCow) {
      return;
    }

    dispach(feedCow({ cowId: findCow.id, robotId: robot.id }));
  };

  const handleMilking = (e) => {
    e.preventDefault;
    if (!findCow) {
      return;
    }

    dispach(milkCow({ cowId: findCow.id, robotId: robot.id }));
  };

  return (
    <div className={classes.robot}>
      <h1>{robot.name}</h1>
      <h2 className="text-yellow-400">{robot.score}</h2>
      <img src="/robot.png" alt="" />
      <div className={classes.actions}>
        <button
          onClick={(e) => handleFeeding(e)}
          type="button"
          disabled={!findCow.hunger}
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Feed
        </button>

        <button
          disabled={!findCow.milk}
          onClick={(e) => handleMilking(e)}
          type="button"
          className="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-600"
        >
          Milk
        </button>
      </div>
    </div>
  );
};

export default Robot;
