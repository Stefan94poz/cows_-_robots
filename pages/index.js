import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Cow from "../components/cow";
import Robot from "../components/robot";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { cowMilk, setBarn, cowHunger } from "../store/barn";

const data = { cows: 5 };

export default function Home() {
  const dispatch = useDispatch();
  const randomNum = Math.floor(Math.random() * 3) + 1;
  const { barn, workers } = useSelector((state) => state.farm);

  useEffect(() => {
    dispatch(setBarn({ cows: data.cows }));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(cowMilk());
      dispatch(cowHunger());
    }, randomNum * 2000);

    return () => clearInterval(timer);
  }, [barn, dispatch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cows And Robots</title>
        <meta name="description" content="Milk cows,get money" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.workers}>
          {workers &&
            workers.map((robot) => {
              return <Robot key={robot.id} robot={robot} />;
            })}
        </div>
        <div className={styles.barn}>
          {barn.map((cow) => {
            return <Cow key={cow.id} cow={cow} />;
          })}
        </div>
        <div className={styles.scoreBoard}>
          <h2>Score Board</h2>
          {workers.map((robot) => {
            return <h3>{`${robot.name} = ${robot.score}`}</h3>;
          })}
        </div>
      </main>

      <footer
        className={styles.footer}
        style={{
          marginTop: "-25px",
          textAlign: "center",
          color: " #000",
          fontWeight: "700",
        }}
      >
        <a
          href="https://www.linkedin.com/in/stefan-stevi%C4%87-0b332a101/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {"Stefan Stevic"}
        </a>
      </footer>
    </div>
  );
}
