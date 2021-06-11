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
  Image,
  Sticky,
  Ref,
  Header,
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
                      <Header as="h2">
                        <Image
                          circular
                          src="https://library.kissclipart.com/20180905/arq/kissclipart-businessman-icon-png-clipart-computer-icons-user-p-f040ea1493575c42.jpg"
                        />{" "}
                        {session.user.first_name}
                      </Header>
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment></Segment>
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
