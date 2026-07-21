import styles from "./page.module.css";
import Profile, {Another} from "@/app/components/Profile";

export default function Home() {
  return (
    <div className={styles.page}>
        <h1>Hello World</h1>
        <Profile />
        <div>Another</div>
        <Profile />
        <div>Another</div>
        <Another />
    </div>
  );
}
