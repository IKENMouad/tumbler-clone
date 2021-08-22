import { useRef } from 'react';
import ReactCircleModal from 'react-circle-modal'
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

import { useEffect, useState } from "react";
import styles from "./styles/profile.module.scss";
import { authenticationService } from "./services/auth.service";
import RightChat from './chat/RightChat';

const Profile = ({ match }) => {
  const [userId, setUserId] = useState("");
  const [photos, setPhotos] = useState([
    {
      id: "1",
      image:
        "https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg",
    },
    {
      id: "2",
      image:
        "https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg",
    },
    {
      id: "3",
      image:
        "https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg",
    },
    {
      id: "4",
      image:
        "https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg",
    },
  ]);

  useEffect(() => {
    const { userId } = match.params;
    if (!userId) {
      authenticationService.currentUser.subscribe((res) => {
        if (res && res._id) setUserId(res._id);
      });
    }
  }, []);

  return (
    <div>
      {userId ? (
        <div className={styles.userProfile}>
          <div className="mx-3">
            <div className="col-12 col-md-12 col-sm-12 ">
              <div className="bg-white shadow rounded ">
                <div
                  className={styles.header}
                  style={{
                    paddingTop: "8rem 0px ",
                    paddingBottom: "8rem !important",
                  }}
                >
                  <div className="media align-items-end profile-header">
                    <div
                      className="profile mr-3"
                      style={{
                        position: "absolute",
                        top: "22%",
                        left: "45%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"
                        width="130"
                        className="my-2"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-light py-4 px-4  d-flex justify-content-between  align-items-content  ">
                  <div className="media-body  ">
                    <h4 className="mt-0  user-name">Manuella Tarly</h4>
                    <p className="small mb-4">
                      <i className="fa fa-map-marker mr-2"></i>San Farcisco
                    </p>
                    <div className="d-inline mx-2 ">
                      <span className={styles.followProfile}>
                        <RightChat label="Follow"  />
                      </span>
                    </div>
                    <div className="d-inline mx-2 ">
                      <span className={styles.followProfile}>Message</span>
                    </div>
                  </div>
                  <ul className="list-inline ">
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block">241</h5>
                      <small className="text-muted">
                        <i className="fa fa-picture-o mr-1"></i>Photos
                      </small>
                    </li>
                    <li className="list-inline-item">
                      <h5 className="font-weight-bold mb-0 d-block">84K</h5>
                      <small className="text-muted">
                        <i className="fa fa-user-circle-o mr-1"></i>Followers
                      </small>
                    </li>
                  </ul>
                </div>

                <div className="py-4 px-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Recent photos</h5>

                    <ItemListModal
                      label="Show all"
                      from="photos"
                      photos={photos}
                    />
                  </div>
                  <div className="row">
                    {photos.map((photo) => (
                      <div className="col-lg-3" key={photo.id}>
                        <img
                          src={photo.image}
                          alt="img-fluid"
                          width="300"
                          className="img-fluid rounded"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Profile


const ItemListModal = ({ label, photos, from }) => {
  const ref = useRef("");
  return (
    <ReactCircleModal
      backgroundColor="#001935"
      ref={ref}
      toogleComponent={(onClick) => (
        <span
          style={{ color: "#00b8ff", cursor: "pointer" }}
          onClick={onClick}
          className="btn btn-link "
        >
          {label}
        </span>
      )}
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <Container>
          <div
            style={{
              cursor: "pointer",
              textAlign: "right",
              position: "relative",
            }}
            className="close-modal"
            onClick={onClick}
          >
            <AiOutlineClose
              style={{
                position: "fixed",
                right: "1rem",
                fontSize: "40px",
                cursor: "pointer",
                color: "white",
              }}
            />
          </div>
          <div className="row">
            {photos.map((photo, index) => (
              <div className="col-lg-3 my-2" key={index}>
                <img
                  src={photo.image}
                  alt="img-fluid"
                  width="300"
                  className="img-fluid rounded"
                />
              </div>
            ))}
          </div>
        </Container>
      )}
    </ReactCircleModal>
  );
};


const Container = styled.div`
 background-color: #001935;
 margin-left: 1rem;
 margin-right: 1rem;
 position: relative;
`;
