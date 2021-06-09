import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "styles/Home.module.css";
import { useSession, signOut } from "next-auth/client";

export default function Navbar() {
  return <div className={styles.navbarDiv}></div>;
}
