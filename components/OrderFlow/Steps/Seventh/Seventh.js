import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";

import uploadIcon from "@public/img/upload-photo-icon.png";
import imageIcon from "@public/img/image-icon.png";
import cameraIcon from "@public/img/camera-icon.png";

const Seventh = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.card}>
        <span className={styles.banner}>Identity Verification</span>
        <h1>Upload a photo of your ID</h1>
        <p>
          By uploading your ID, the physician will be able to verify your
          identity quicker and get your medication fulfilled faster.
        </p>
        <Image
          className={styles.uploadIcon}
          src={uploadIcon}
          alt=""
          width={223}
          height={205}
        />
        <div className={styles.actions}>
          <label>
            <input type="file" />
            <Image src={imageIcon} alt="" width={42} height={31} />
            <span>Select photo</span>
          </label>
          <label>
            <input type="file" />
            <Image src={cameraIcon} alt="" width={46} height={34} />
            <span>Take photo</span>
          </label>
        </div>
      </div>
    </Container>
  );
};

export default Seventh;
