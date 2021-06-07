import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import styles from "../../styles/Home.module.css";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

export default function SignIn({ providers }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { error } = router.query;

  async function Login(event) {
    event.preventDefault();
    signIn("credentials", { username, password });
  }

  return (
    <div className={styles.container}>
      <style jsx global>{`
        body {
          background: rgb(22, 0, 36);
          background: linear-gradient(
            90deg,
            rgba(22, 0, 36, 1) 0%,
            rgba(88, 9, 121, 1) 43%,
            rgba(200, 154, 255, 1) 100%
          );
        }
      `}</style>

      <Head>
        <title>WUFPH.chat | Login</title>
      </Head>

      <div className={styles.loginDiv}>
        <Segment placeholder className={styles.purpleAuthentication}>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form onSubmit={Login} inverted>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  type="email"
                  onChange={({ target }) => {
                    setUsername(target.value);
                  }}
                  value={username}
                  className={styles.whiteText}
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                  onChange={({ target }) => {
                    setPassword(target.value);
                  }}
                  value={password}
                  className={styles.whiteText}
                />

                <Button
                  content="Login"
                  color="purple"
                  loading={loading}
                  fluid
                  icon="sign in"
                />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Button
                content="Sign up"
                icon="paw"
                size="big"
                color="pink"
                onClick={() => {
                  router.push("/authorize/signup");
                }}
              />
            </Grid.Column>
          </Grid>

          <Divider vertical inverted>
            Or
          </Divider>
        </Segment>
      </div>
    </div>
  );
}
