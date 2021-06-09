import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "styles/Home.module.css";
import { useSession, signOut } from "next-auth/client";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Input,
  Icon,
  Rail,
} from "semantic-ui-react";

import Navbar from "components/Navbar.js";

export default function Home() {
  const router = useRouter();
  const [session, loading] = useSession();
  useEffect(() => {
    if (!loading) {
      if (!session) {
        window.location.href = "/authorize/login";
      }
    }
  }, [loading]);

  return (
    <>
      {session && (
        <>
          <Navbar />
          <div className={styles.container}>
            <Head>
              <title>
                Home | {`${session.user.first_name} ${session.user.last_name}`}
              </title>
            </Head>

            <Grid centered columns={3}>
              <Grid.Column>
                <Segment>
                  <Rail position="left">
                    <Segment>Left Rail Content</Segment>
                  </Rail>

                  <Rail position="right">
                    <Segment>Right Rail Content</Segment>
                  </Rail>
                </Segment>
              </Grid.Column>
            </Grid>
          </div>
        </>
      )}
    </>
  );
}
