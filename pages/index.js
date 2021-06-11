import React, { useEffect, useState, createRef } from "react";
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
  Sticky,
  Ref,
} from "semantic-ui-react";

import Navbar from "components/Navbar.js";

export default function Home() {
  const contextRef = createRef();
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

            <Grid columns="equal" padded>
              <Grid.Column>
                <Sticky context={contextRef}>
                  <Grid.Row>
                    <Segment>
                      <h1>blah blah</h1>
                      <h1>blah blah</h1>
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment>
                      <h1>blah blah</h1>
                      <h1>blah blah</h1>
                    </Segment>
                  </Grid.Row>
                </Sticky>
              </Grid.Column>
              <Grid.Column width={6}>
                <Ref innerRef={contextRef}>
                  <div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                      id="postDiv"
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "100px",
                        backgroundColor: "black",
                        marginBottom: "20px",
                      }}
                    ></div>
                  </div>
                </Ref>
              </Grid.Column>
              <Grid.Column>
                <Sticky context={contextRef}>
                  <Segment></Segment>
                </Sticky>
              </Grid.Column>
            </Grid>
          </div>
        </>
      )}
    </>
  );
}
