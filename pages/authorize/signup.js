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

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { error } = router.query;

  async function Signup(event) {
    setLoading(true);
    event.preventDefault();
    const result = await axios.post("/api/user/signup", { username: "test" });
    if (result) {
      setLoading(false);
    }
  }

  function ShowPassword() {
    alert("hello");
  }

  return (
    <div className={styles.container}>
      <style jsx global>{`
        body {
          background-image: url("https://lh3.googleusercontent.com/proxy/l8N2lCAlfXVAEyc4H5B6WT1VWRshGTSDV3QEcBtv6AOeXwhBxDcqbIgJQfkCzB0tH0ZwGo-h3x2Pda9JQyhjFUV2L4QL5PNHRY2U3Olv20KttrPw6vjeCAzZUFXRcW_BArwkVA") !important;
          background-size: cover;
        }
      `}</style>

      <Head>
        <title>WUFPH.chat | Signup</title>
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
              <Segment className={styles.signupSegment}>
                <Form>
                  <Grid>
                    <Grid.Row className={styles.signupGrid}>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>First Name</label>
                          <input placeholder="First Name" />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className={styles.signupGrid}>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>Last Name</label>
                          <input placeholder="Last Name" />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className={styles.signupGrid}>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>Email</label>
                          <input placeholder="your@email.com" type="email" />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className={styles.signupGrid}>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>Phone Number</label>
                          <input placeholder="xxx-xxx-xxxx" type="tel" />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className={styles.signupGrid}>
                      <Grid.Column width={16}>
                        <Form.Field>
                          <label style={{ color: "white" }}>Username</label>
                          <input placeholder="Create a username" />
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
                          />
                        </Form.Field>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column>
                        <Button
                          fluid
                          color="purple"
                          onClick={Signup}
                          loading={loading}
                        >
                          Signup
                        </Button>
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
