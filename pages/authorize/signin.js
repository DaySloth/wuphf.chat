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

  function Login(event) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>WUFPH.chat | Signin</title>
      </Head>

      <div className={styles.loginDiv}>
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

                <Button content="Login" loading={loading} primary fluid />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Button content="Sign up" icon="signup" size="big" onClick={()=>{router.push("/authorize/signup")}}/>
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </div>
    </div>
  );
}
