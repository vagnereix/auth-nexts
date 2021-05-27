import styles from "../styles/Home.module.css";

import Cookie from "js-cookie";
import { addDays } from "date-fns";
import router from "next/router";

export default function Home() {
  function signIn() {
    Cookie.set("token", "custom-token-here", {
      expires: addDays(new Date(), 1),
    });
  }

  function signOut() {
    Cookie.remove("token");
  }

  function toPrivateClient() {
    router.push("/private-client");
  }

  function toPrivateSSR() {
    router.push("/private-ssr");
  }

  return (
    <div className={styles.container}>
      <h1>Public page</h1>

      <div>
        <button type="button" onClick={signIn}>
          Sign in
        </button>
        <button type="button" onClick={signOut}>
          Sign out
        </button>

        <button type="button" onClick={toPrivateClient}>
          Private client
        </button>
        <button type="button" onClick={toPrivateSSR}>
          Private SSR
        </button>
      </div>
    </div>
  );
}
