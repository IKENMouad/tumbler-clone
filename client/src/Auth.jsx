import React, { useEffect, useRef, useState } from "react";
import { useLogin, useRegister } from "./services/auth.service";
import "./styles/auth.scss";
import { useHistory } from "react-router-dom";

const Auth = ({}) => {
  const historyRouter = useHistory();
  const refModal = useRef("");
  const login = useLogin();
  const register = useRegister();
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    document.querySelector(".img__btn").addEventListener("click", function () {
      document.querySelector(".cont").classList.toggle("s--signup");
    });
  }, []);

  const authHandler = (e, status = "login") => {
    e.preventDefault();
    console.log("user", userForm);
    switch (status) {
      case "login":
        login({ email: userForm.email, password: userForm.password });
        historyRouter.push("/dashborad");
        break;
      case "register":
        register({
          name: userForm.name,
          email: userForm.email,
          password: userForm.password,
        });
        break;
      default:
        break;
    }
  };

  // const saveSelectedItems = ({ type, hashs }) => {
  //   switch (type) {
  //     case "not-now":
  //       break;

  //     default:
  //       break;
  //   }
  //   refModal.current.closeMenu();
  // };

  return (
    <div>
      <div className="cont">
        <form onSubmit={(event) => authHandler(event, "login")}>
          <div className="form sign-in">
            <h2>Welcome back,</h2>
            <label>
              <span>Email</span>
              <input
                type="email"
                value={userForm.email}
                onChange={(event) =>
                  setUserForm({ ...userForm, email: event.target.value })
                }
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                value={userForm.password}
                onChange={(event) =>
                  setUserForm({ ...userForm, password: event.target.value })
                }
              />
            </label>
            <p className="forgot-pass">Forgot password?</p>
            <button type="submit" className="submit">
              Sign In
            </button>
            <button type="button" className="fb-btn">
              Connect with <span>facebook</span>
            </button>
          </div>
        </form>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <form onSubmit={(event) => authHandler(event, "register")}>
            <div className="form sign-up">
              <h2>Time to feel like home,</h2>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  value={userForm.name}
                  onChange={(event) =>
                    setUserForm({ ...userForm, name: event.target.value })
                  }
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={userForm.email}
                  onChange={(event) =>
                    setUserForm({ ...userForm, email: event.target.value })
                  }
                />
              </label>
              <label>
                <span>Password</span>
                <input
                  type="password"
                  value={userForm.password}
                  onChange={(event) =>
                    setUserForm({ ...userForm, password: event.target.value })
                  }
                />
              </label>
              <button type="submit" className="submit">
                Sign Up
              </button>
              <button type="button" className="fb-btn">
                Join with <span>facebook</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <a
        href="https://dribbble.com/shots/3306190-Login-Registration-form"
        className="icon-link"
      >
        <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png" />
      </a>
      <a
        href="https://twitter.com/NikolayTalanov"
        className="icon-link icon-link--twitter"
      >
        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
      </a>
      {/* <ItemListModal
        refModal={refModal}
        saveSelectedItemsHandler={({type, hashs}) => saveSelectedItems({type, hashs})}
      /> */}
    </div>
  );
};

// const ItemListModal = ({ refModal, saveSelectedItemsHandler }) => {
//   const hashsSet = new Set();

//   const addToSelectedItems = (event, item) => {
//     event.stopPropagation();
//     hashsSet.add(item);
//   };

//   const saveSelectedItems = (type) => {
//     saveSelectedItemsHandler({ type, hashs: Array.from(hashsSet) });
//   };

//   const closeModal = () => {
//     refModal.current.closeMenu();
//   };
//   return (
//     <ReactCircleModal
//       className="ItemListModal"
//       backgroundColor="#53555fe6"
//       toogleComponent={(onClick) => <span></span>}
//       ref={refModal}
//       offsetX={0}
//       offsetY={0}
//     >
//       {(onClick) => (
//         <div>
//           <div onClick={(e) => closeModal(e)} className="grid-container">
//             {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
//               <div
//                 key={i}
//                 onClick={(e) => addToSelectedItems(e, i)}
//                 className={classNames("grid-item", {
//                   "grid-selected-item": hashsSet.has(i),
//                 })}
//               >
//                 {i}
//               </div>
//             ))}
//           </div>
//           <div className="modal-footer d-flex justify-content-around align-items-center">
//             <div>
//               <button
//                 className="btn btn-warning"
//                 onClick={(e) => saveSelectedItems("not-now")}
//               >
//                 Not now
//               </button>
//             </div>
//             <div>
//               <button
//                 onClick={(e) => saveSelectedItems("ok")}
//                 className="btn btn-warning"
//               >
//                 Ok
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </ReactCircleModal>
//   );
// };

export default Auth;
