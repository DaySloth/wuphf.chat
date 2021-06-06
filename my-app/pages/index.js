import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/client";

export default function Home() {
  const Router = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    if (!loading) {
      if (!session) {
        window.location.href = "/authorize/signin";
      }
    }
  }, [loading]);

  return (
    <>
      {false && (
        <div className={styles.container}>
          <Head>
            <title>Home</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>Welcome to Home.</h1>
            <ul>
              <li>
                <a href="/login">Go To Login</a>
              </li>
              <li>
                <a href="/friends/22ty5067scfj">Go to Friends</a>
              </li>
              <li>
                <a href="/profile/Random User">Go to Profile</a>
              </li>
            </ul>
          </main>

          <footer className={styles.footer}></footer>
        </div>
      )}
    </>
  );
}
