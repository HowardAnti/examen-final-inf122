import Image from "next/image";
import styles from "./page.module.css";
import InfoBlock from "./components/InfoBlock";

export default function Home() {
  return (
    <main className={styles.main}>
      <InfoBlock/>
      
    </main>
  );
}
