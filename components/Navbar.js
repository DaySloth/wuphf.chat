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
  Dropdown,
  Checkbox,
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
              avatar
              src="https://icon-library.com/images/users-vector-icon-png_260862_41598.jpg"
            />{" "}
            {session.user.first_name}
          </Header>

          <Dropdown
            icon={dropdownIcon}
            as="h3"
            onClose={() => setDropdownIcon("caret down")}
            onOpen={() => setDropdownIcon("caret up")}
            compact
          >
            <Dropdown.Menu>
              <Dropdown.Header content="Settings" icon="cog" />
              <Dropdown.Divider />

              <Dropdown.Item text="Logout" onClick={signOut} />
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>
      </Grid>
    </div>
  );
}
