import logo from './logo.svg';
import { motion } from "framer-motion";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div>

        <div className="orbitGroup">

          <div className="orbit1">
            <motion.div              
              animate={{ rotate: 360, }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="orbitItem"
            >
              <a href="https://www.google.com/" className="planet planet1">
                <motion.div className="planetInner"
                  animate={{ rotate: -360, }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                  <div className="planetCircle">
                    <div className="planetCircleBg"></div>
                    <div className="planetIcon">
                      <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1068 27.5196C10.1068 27.0434 10.3033 26.5868 10.6532 26.2501C11.003 25.9134 11.4775 25.7243 11.9723 25.7243H12.0949C12.2949 25.4106 12.5673 25.1455 12.891 24.9496C13.2148 24.7537 13.5811 24.6323 13.9615 24.5948C14.3419 24.5573 14.7262 24.6047 15.0844 24.7333C15.4427 24.862 15.7653 25.0684 16.0273 25.3365C16.1555 25.2962 16.2875 25.268 16.4214 25.2523L16.9468 20.2878H18.8999L19.2677 25.286C19.4016 25.3019 19.5336 25.3301 19.6619 25.3703C19.9238 25.1021 20.2464 24.8957 20.6047 24.767C20.9629 24.6384 21.3472 24.591 21.7276 24.6285C22.108 24.666 22.4743 24.7874 22.7981 24.9833C23.1218 25.1792 23.3942 25.4443 23.5942 25.758H23.7168C23.9618 25.758 24.2044 25.8044 24.4307 25.8946C24.657 25.9849 24.8627 26.1171 25.0359 26.2838C25.2091 26.4505 25.3466 26.6484 25.4403 26.8662C25.534 27.0841 25.5823 27.3175 25.5823 27.5533C25.5819 27.7041 25.5613 27.8543 25.521 28H35.7241L20.1435 0H15.5806L0 27.9663H10.1681C10.1283 27.8204 10.1077 27.6704 10.1068 27.5196ZM14.626 13.7556L15.9397 11.5641L15.7645 8.6478C15.7468 8.38034 15.8107 8.11373 15.9484 7.8808L17.7701 4.77905L19.5217 7.74594C19.7118 8.06923 19.8058 8.43667 19.7932 8.80795L19.6969 11.4377L21.2208 14.1517C21.3953 14.4635 21.457 14.8223 21.3959 15.1716C21.3959 15.1716 20.6165 18.4672 20.0998 18.4503L18.8911 16.8236H16.9644L15.3441 18.7622L14.4683 15.0367C14.3969 14.5888 14.4865 14.1309 14.7223 13.7387" fill="#5FCF8C"></path></svg>
                    </div>
                    <div class="planetCircleSe1"></div>
                    <div class="planetCircleSe2"></div>
                  </div>
                  <div className="planetText">
                    About Us
                  </div>
                </motion.div>
              </a>
              <a href="https://www.linkedin.com/" className="planet planet3">
                <motion.div className="planetInner"
                  animate={{ rotate: -360, }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                  <div className="planetCircle">
                    <div className="planetCircleBg"></div>
                    <div className="planetIcon">
                      <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1068 27.5196C10.1068 27.0434 10.3033 26.5868 10.6532 26.2501C11.003 25.9134 11.4775 25.7243 11.9723 25.7243H12.0949C12.2949 25.4106 12.5673 25.1455 12.891 24.9496C13.2148 24.7537 13.5811 24.6323 13.9615 24.5948C14.3419 24.5573 14.7262 24.6047 15.0844 24.7333C15.4427 24.862 15.7653 25.0684 16.0273 25.3365C16.1555 25.2962 16.2875 25.268 16.4214 25.2523L16.9468 20.2878H18.8999L19.2677 25.286C19.4016 25.3019 19.5336 25.3301 19.6619 25.3703C19.9238 25.1021 20.2464 24.8957 20.6047 24.767C20.9629 24.6384 21.3472 24.591 21.7276 24.6285C22.108 24.666 22.4743 24.7874 22.7981 24.9833C23.1218 25.1792 23.3942 25.4443 23.5942 25.758H23.7168C23.9618 25.758 24.2044 25.8044 24.4307 25.8946C24.657 25.9849 24.8627 26.1171 25.0359 26.2838C25.2091 26.4505 25.3466 26.6484 25.4403 26.8662C25.534 27.0841 25.5823 27.3175 25.5823 27.5533C25.5819 27.7041 25.5613 27.8543 25.521 28H35.7241L20.1435 0H15.5806L0 27.9663H10.1681C10.1283 27.8204 10.1077 27.6704 10.1068 27.5196ZM14.626 13.7556L15.9397 11.5641L15.7645 8.6478C15.7468 8.38034 15.8107 8.11373 15.9484 7.8808L17.7701 4.77905L19.5217 7.74594C19.7118 8.06923 19.8058 8.43667 19.7932 8.80795L19.6969 11.4377L21.2208 14.1517C21.3953 14.4635 21.457 14.8223 21.3959 15.1716C21.3959 15.1716 20.6165 18.4672 20.0998 18.4503L18.8911 16.8236H16.9644L15.3441 18.7622L14.4683 15.0367C14.3969 14.5888 14.4865 14.1309 14.7223 13.7387" fill="#58C7EF"></path>
                      </svg>
                    </div>
                    <div class="planetCircleSe1"></div>
                    <div class="planetCircleSe2"></div>
                  </div>
                  <div className="planetText">
                    Portfolio
                  </div>
                </motion.div>
              </a>
              <a href="https://www.facebook.com/" className="planet planet2">
                <motion.div className="planetInner"
                  animate={{ rotate: -360, }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                  <div className="planetCircle">
                    <div className="planetCircleBg"></div>
                    <div className="planetIcon">
                      <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1068 27.5196C10.1068 27.0434 10.3033 26.5868 10.6532 26.2501C11.003 25.9134 11.4775 25.7243 11.9723 25.7243H12.0949C12.2949 25.4106 12.5673 25.1455 12.891 24.9496C13.2148 24.7537 13.5811 24.6323 13.9615 24.5948C14.3419 24.5573 14.7262 24.6047 15.0844 24.7333C15.4427 24.862 15.7653 25.0684 16.0273 25.3365C16.1555 25.2962 16.2875 25.268 16.4214 25.2523L16.9468 20.2878H18.8999L19.2677 25.286C19.4016 25.3019 19.5336 25.3301 19.6619 25.3703C19.9238 25.1021 20.2464 24.8957 20.6047 24.767C20.9629 24.6384 21.3472 24.591 21.7276 24.6285C22.108 24.666 22.4743 24.7874 22.7981 24.9833C23.1218 25.1792 23.3942 25.4443 23.5942 25.758H23.7168C23.9618 25.758 24.2044 25.8044 24.4307 25.8946C24.657 25.9849 24.8627 26.1171 25.0359 26.2838C25.2091 26.4505 25.3466 26.6484 25.4403 26.8662C25.534 27.0841 25.5823 27.3175 25.5823 27.5533C25.5819 27.7041 25.5613 27.8543 25.521 28H35.7241L20.1435 0H15.5806L0 27.9663H10.1681C10.1283 27.8204 10.1077 27.6704 10.1068 27.5196ZM14.626 13.7556L15.9397 11.5641L15.7645 8.6478C15.7468 8.38034 15.8107 8.11373 15.9484 7.8808L17.7701 4.77905L19.5217 7.74594C19.7118 8.06923 19.8058 8.43667 19.7932 8.80795L19.6969 11.4377L21.2208 14.1517C21.3953 14.4635 21.457 14.8223 21.3959 15.1716C21.3959 15.1716 20.6165 18.4672 20.0998 18.4503L18.8911 16.8236H16.9644L15.3441 18.7622L14.4683 15.0367C14.3969 14.5888 14.4865 14.1309 14.7223 13.7387" fill="#5FCF8C"></path>
                      </svg>
                    </div>
                    <div class="planetCircleSe1"></div>
                    <div class="planetCircleSe2"></div>
                  </div>
                  <div className="planetText">
                    Contact Us
                  </div>
                </motion.div>
              </a>

            </motion.div>
          </div>

          <div className="orbit2">
            <motion.div             
              animate={{ rotate: 360, }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="orbitItem"
            >
              <a href="https://twitter.com/" className="planet planet3">
                <motion.div className="planetInner"
                  animate={{ rotate: -360, }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                  <div className="planetCircle">
                    <div className="planetCircleBg"></div>
                    <div className="planetIcon">
                      <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1068 27.5196C10.1068 27.0434 10.3033 26.5868 10.6532 26.2501C11.003 25.9134 11.4775 25.7243 11.9723 25.7243H12.0949C12.2949 25.4106 12.5673 25.1455 12.891 24.9496C13.2148 24.7537 13.5811 24.6323 13.9615 24.5948C14.3419 24.5573 14.7262 24.6047 15.0844 24.7333C15.4427 24.862 15.7653 25.0684 16.0273 25.3365C16.1555 25.2962 16.2875 25.268 16.4214 25.2523L16.9468 20.2878H18.8999L19.2677 25.286C19.4016 25.3019 19.5336 25.3301 19.6619 25.3703C19.9238 25.1021 20.2464 24.8957 20.6047 24.767C20.9629 24.6384 21.3472 24.591 21.7276 24.6285C22.108 24.666 22.4743 24.7874 22.7981 24.9833C23.1218 25.1792 23.3942 25.4443 23.5942 25.758H23.7168C23.9618 25.758 24.2044 25.8044 24.4307 25.8946C24.657 25.9849 24.8627 26.1171 25.0359 26.2838C25.2091 26.4505 25.3466 26.6484 25.4403 26.8662C25.534 27.0841 25.5823 27.3175 25.5823 27.5533C25.5819 27.7041 25.5613 27.8543 25.521 28H35.7241L20.1435 0H15.5806L0 27.9663H10.1681C10.1283 27.8204 10.1077 27.6704 10.1068 27.5196ZM14.626 13.7556L15.9397 11.5641L15.7645 8.6478C15.7468 8.38034 15.8107 8.11373 15.9484 7.8808L17.7701 4.77905L19.5217 7.74594C19.7118 8.06923 19.8058 8.43667 19.7932 8.80795L19.6969 11.4377L21.2208 14.1517C21.3953 14.4635 21.457 14.8223 21.3959 15.1716C21.3959 15.1716 20.6165 18.4672 20.0998 18.4503L18.8911 16.8236H16.9644L15.3441 18.7622L14.4683 15.0367C14.3969 14.5888 14.4865 14.1309 14.7223 13.7387" fill="#DC577F"></path>
                      </svg>
                    </div>
                    <div class="planetCircleSe1"></div>
                    <div class="planetCircleSe2"></div>
                  </div>
                  <div className="planetText">
                    Home
                  </div>
                </motion.div>
              </a>
            </motion.div>
          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
