const Stats = ({ cow }) => {
  const { milk, hunger } = cow;
  const overFeed = hunger * 10 > 100;
  const overMilk = milk * 10 > 100;

  return (
    <>
      <div className="">
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-yellow-400 text-xs text-dark-100 text-center p-0.5 leading-none rounded-full font-bold "
            style={{ width: `${overFeed ? 100 : hunger * 10}%` }}
          >
            Hunger
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-2">
          <div
            className="bg-gray-600 text-xs font-medium text-dark-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${overMilk ? 100 : milk * 10}%` }}
          >
            Milk
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
