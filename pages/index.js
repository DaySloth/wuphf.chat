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
  Dimmer,
  Loader,
} from "semantic-ui-react";

import Navbar from "components/Navbar.js";

export default function Home() {
  const contextRef = createRef();
  const [isMobile, setIsMobile] = useState(true);
  const router = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    if (!loading) {
      if (!session) {
        window.location.href = "/authorize/login";
      }
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1400) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    });
  }, [loading]);

  return (
    <>
      {loading && (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )}

      {session && (
        <>
          <Navbar />
          <div className={!isMobile ? styles.container : "false"}>
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
                      <Header as="h1" textAlign="center">
                        <Image
                          circular
                          src="https://icon-library.com/images/users-vector-icon-png_260862_41598.jpg"
                          size="massive"
                        />
                        {session.user.first_name}
                      </Header>
                    </Segment>
                  </Grid.Row>
                  <Grid.Row className={styles.stickyChats}>
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
