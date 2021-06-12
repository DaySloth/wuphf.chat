import React, { useEffect, useState } from "react";
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
  Image,
  List,
  Header,
} from "semantic-ui-react";

export default function Navbar() {
  const [dropdownIcon, setDropdownIcon] = useState("caret down");
  const [session, loading] = useSession();

  return (
    <div className={styles.navbarDiv}>
      <Grid columns={3} inverted>
        <Grid.Column width={5}></Grid.Column>
        <Grid.Column textAlign="center" width={6}>
          <List horizontal>
            <List.Item>
              <Icon name="home" size="huge" className={styles.iconInteract} />
            </List.Item>
            <List.Item>
              <Icon name="home" size="huge" className={styles.iconInteract} />
            </List.Item>
            <List.Item>
              <Icon name="home" size="huge" className={styles.iconInteract} />
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={5}>
          <Header as="h2" className={styles.navbarUser}>
            <Image
              circular
              src="https://library.kissclipart.com/20180905/arq/kissclipart-businessman-icon-png-clipart-computer-icons-user-p-f040ea1493575c42.jpg"
            />{" "}
            {session.user.first_name}
          </Header>
          <Icon
            name={dropdownIcon}
            size="large"
            className={styles.iconInteract}
            onClick={() => {
              if (dropdownIcon === "caret down") {
                setDropdownIcon("caret up");
              } else {
                setDropdownIcon("caret down");
              }
            }}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}
