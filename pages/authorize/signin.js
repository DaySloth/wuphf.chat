import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import styles from "../../styles/Home.module.css";
import { getProviders, signIn } from "next-auth/client";
import { useRouter } from "next/router";

export default function SignIn({ providers }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { error } = router.query;

  function Login(event) {
    event.preventDefault();
    setLoading(!loading);
    signIn("github");
  }

  return (
    <>
      <Head>
        <title>WUFPH.chat | Signin</title>
      </Head>

      <div className={styles.container}>
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form onSubmit={Login}>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  placeholder="Username"
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                />

                <Button content="Login" loading={loading} primary />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Button content="Sign up" icon="signup" size="big" />
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
