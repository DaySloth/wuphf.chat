import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Input,
  Icon,
} from "semantic-ui-react";
import styles from "../../styles/Home.module.css";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { SendEmail } from "../../util/sender";

export default function Signup() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    username: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { error } = router.query;

  async function Signup(event) {
    setLoading(true);
    event.preventDefault();

    try {
      const new_user = await axios.post("/api/user/signup", user);

      if (new_user.status === 200) {
        setLoading(false);
        SendEmail("allisterrampenthal@gmail", "test email", "yay it worked");
        router.push("/authorize/login");
      }
    } catch (error) {}
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
        <title>WUFPH.chat | Sign up</title>
      </Head>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <div className={styles.signupLogo}>
              <Image
                src="/logo.jpeg"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div className={styles.signupDiv}>
              <Segment className={styles.purpleAuthentication}>
                <Form onSubmit={Signup}>
                  <Grid>
                    <Grid.Row className={styles.signupGrid}>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>First Name</label>
                          <input
                            placeholder="First Name"
                            name="first_name"
                            onChange={({ target }) => {
                              setUser({ ...user, first_name: target.value });
                            }}
                            value={user.first_name}
                          />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className={styles.signupGrid}>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>Last Name</label>
                          <input
                            placeholder="Last Name"
                            name="last_name"
                            onChange={({ target }) => {
                              setUser({ ...user, last_name: target.value });
                            }}
                            value={user.last_name}
                          />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className={styles.signupGrid}>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>Email</label>
                          <input
                            placeholder="your@email.com"
                            type="email"
                            name="email"
                            onChange={({ target }) => {
                              setUser({ ...user, email: target.value });
                            }}
                            value={user.email}
                          />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className={styles.signupGrid}>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>Phone Number</label>
                          <input
                            placeholder="xxx-xxx-xxxx"
                            type="tel"
                            name="phone_number"
                            onChange={({ target }) => {
                              setUser({ ...user, phone_number: target.value });
                            }}
                            value={user.phone_number}
                          />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className={styles.signupGrid}>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>Username</label>
                          <input
                            placeholder="Create a username"
                            name="username"
                            onChange={({ target }) => {
                              setUser({ ...user, username: target.value });
                            }}
                            value={user.username}
                          />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className={styles.signupGrid}>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>Password</label>
                          <Input
                            icon={{
                              name: "lock",
                            }}
                            type="password"
                            name="password"
                            onChange={({ target }) => {
                              setUser({ ...user, password: target.value });
                            }}
                            value={user.password}
                          />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>
                            Confirm Password
                          </label>
                          <Input
                            icon={{
                              name: "lock",
                            }}
                            type="password"
                            name="confirm_password"
                            onChange={({ target }) => {
                              setUser({
                                ...user,
                                confirm_password: target.value,
                              });
                            }}
                            value={user.confirm_password}
                          />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column>
                        <Button
                          fluid
                          content="Sign up"
                          color="pink"
                          loading={loading}
                          size="huge"
                          icon="paw"
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form>
              </Segment>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
