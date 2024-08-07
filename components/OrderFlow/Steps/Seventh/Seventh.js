import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";

import uploadIcon from "@public/img/upload-photo-icon.png";
import imageIcon from "@public/img/image-icon.png";
import cameraIcon from "@public/img/camera-icon.png";

import { useContext } from "react";
import AuthContext from "../../../../store/auth-context";
import Axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { searchParamsUrl } from "@components/searchParams";

const Seventh = () => {
  const [uploadedImage, setUploadedImage] = useState();
  const [imageForUpload, setImageForUpload] = useState();
  const fileInputRef = useRef(null);
  const router = useRouter();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);

      setImageForUpload(e.target.files);
    } else {
      setUploadedImage(null);
    }
  };

  const authCtx = useContext(AuthContext);

  const handleUploadFiles = async () => {
    // if (imageForUpload?.length) {
    // } else {
    //   return;
    // }
    var counter = 0;
    for (let i = 0; i < imageForUpload?.length; i++) {
      const formData = new FormData();
      if (imageForUpload && imageForUpload[i]) {
        const ih = imageForUpload[i];
        formData.append("file", ih);
        formData.append("token", authCtx.Token());
      }

      const route = "/api/case/upload-file";
      try {
        const rese = await Axios.post(route, formData, { 
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((res) => {
            counter++;
          })
          .catch((error) => {
            alert(error);
          });
      } catch (err) {
        alert("Something went wrong!" + err);
      }
    }
    if (counter == imageForUpload?.length) {
      SendToMDI();
    }
  };

  const SendToMDI = async () => {
    const route = "/api/case/send-to-mdi";
    const headers = {
      "Content-Type": "application/json",
      case: authCtx.Case(),
    };
    try {
      const rese = await Axios.post(
        route,
        { Token: authCtx.Token() },
        { headers }
      )
        .then((res) => {
          router.push("/account" + searchParamsUrl());
        })
        .catch((error) => {
          alert(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  const handleSelectPhotoClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Container className={styles.container}>
      <div className={styles.card}>
        <span className={styles.banner}>Identity Verification</span>
        <p>
          Upload a photo of
          <br /> your ID
        </p>
        <span>
          By uploading your ID, the physician will be able to verify <br /> your
          identity quicker and get your medication fulfilled faster.
        </span>
        <div>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            multiple
          />
          <div className={styles.imagePreview}>
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded ID"
                style={{ width: "15em", height: "8.9rem" }}
                className={styles.defaultImage}
              />
            ) : (
              <img
                src="/assets/sildenafilOrderFlow/id/id.png"
                alt="Default ID"
                layout="responsive"
                className={styles.defaultImage}
                //   style={{ width: "100%" }}
              />
            )}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.selectPhoto}
            onClick={handleSelectPhotoClick}
          >
            Select photo
          </button>
          <button className={styles.takePhoto} onClick={handleUploadFiles}>
            Upload photo
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Seventh;
