import Stats from "../stats";
import classes from "./styles.module.scss";

const Cow = ({ cow }) => {
  const { milk, hunger, name } = cow;

  const status = hunger >= 5 ? "#facc15" : milk <= 5 ? "#000" : "#fff";

  return (
    <div className={classes.cow} style={{ border: `3px solid ${status}` }}>
      <h1>{name}</h1>
      <Stats cow={cow} />
      <img src="/cow.png" alt="" />
    </div>
  );
};

export default Cow;
