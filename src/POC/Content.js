import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Trump from "../assets/imageTrump2.jpg";
import JennyImage from "../assets/JennyImage.PNG";
import svg from "../assets/next.png";
import './CSS/mailbu2.css'
import styles from './CSS/mailbu.module.css'


export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check: true,
      getHeight: document.documentElement.clientWidth,
    };
    this.callme = this.callme.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.callme);
  }
  callme() {
    var w = document.documentElement.clientWidth;
    this.setState({
      getHeight: w,
    });
    if (w > 751) {
      this.setState({
        check: false,
      });
    } else {
      this.setState({
        check: true,
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <br />
          <h5 className={styles.text}>This is New News</h5>
          <h1 className={styles.text2} >
            Home
          </h1>
        </div>{" "}
        <br />
        <div>
          <span className={styles.mainHeader}>Politics </span>
          <hr className={styles.horizon} />
          <br />

          <div className="row">
            <div className="edge col-md-6 col-lg-4 col-xl-4">
              <div className={styles.bannerImage}>
                <img className="img_res img-fluid" variant="top" src={Trump} alt="trumpImg"/>
                <div className="content">
                  <h3 className={styles.textimage}>
                    <strong>
                      Lin-Manuel Miranda says Donald Trump is spreading 'a
                      virulent strain of a virus
                    </strong>
                  </h3>
                  <p className={styles.textimage2}>Jonnathan Doe</p>
                </div>
              </div>

              <br />
            </div>
            <div className=" edge col-md-6 col-lg-4 col-xl-4" >
                                <div className={styles.backGround}>
                                    <Card.Img variant="top" src={JennyImage} />
                                    <Card.Body className="body1" >
                                        <Card.Text className={styles.makeFont1}><span><strong>
                                            Jenny Lawson is Publishing a New Book and It's Sort of a Coloring Book</strong></span>
                                        </Card.Text>
                                        <footer >
                                            <span  className={styles.footer1}>Jonnathan Doe</span>
                                        </footer>
                                    </Card.Body>
                                </div><br/>
                                <Card className={styles.backGround}>
                                    <Card.Body  className="body1" >
                                        <Card.Text className={styles.makeFont}><span><strong>
                                            Airtel Offers 3 GB Free Data A Month
                                               To Customers Who Switch To Its 4G Service</strong></span>
                                        </Card.Text>
                                        <footer >
                                            <span  className={styles.footer1}>Alice Doe</span>
                                        </footer>
                                    </Card.Body>
                                </Card><br/>
                            </div>

            <div className=" col-lg-4 col-xl-4 col-md-12">
              <div className="row">
                <div
                  className={
                    this.state.getHeight === 1024
                      ? "col-xl-12 col-md-12"
                      : " col-xl-12 col-lg-12 col-md-6 col-sm-6 col-xs-12"
                  }
                >
                  <div
                    className="cardView" 
                  >
                    <div className={styles.card_body3}>
                      <span>
                        <h6
                          className={this.state.getHeight <= 425? "backGround3": this.state.check? "backGround2": "backGround1"}
                        >
                          Airtel Offers 3 GB Free Data A Month To Customers Who
                          Switch To Its 4G Service
                        </h6>
                      </span>
                      <footer className={styles.footer1}>
                        <span>Alex Parkinson</span>
                      </footer>
                      <hr />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.getHeight === 1024
                      ? "col-xl-12 col-md-12 col-sm-6"
                      : " col-xl-12 col-lg-12 col-md-6 col-sm-6 col-xs-12"
                  }
                >
                  <div
                    className=" cardView"
                  >
                  <div className={styles.card_body3}>
                      <span>
                        <h6
                          className={
                            this.state.getHeight <= 425
                              ? "backGround3"
                              : this.state.check
                              ? "backGround2"
                              : "backGround1"
                          }
                        >
                          Warning Letter For Ankaleshwar Plant Sends Wockhardt
                          Shares To Near 2.5- Year Low
                        </h6>
                      </span>
                      <footer className={styles.footer1}>
                        <span>Alice Doe</span>
                      </footer>
                      <hr />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.getHeight === 1024
                      ? "col-xl-12 col-md-12"
                      : "col-xl-12 col-lg-12 col-md-6 col-sm-6 col-xs-12"
                  }
                >
                  <div
                    className="cardView">
         <div className={styles.card_body3}>
                      <span>
                        <h6
                          className={
                            this.state.getHeight <= 425
                              ? "backGround3"
                              : this.state.check
                              ? "backGround2"
                              : "backGround1"
                          }
                        >
                          Sundar Pichai Launches `Digital Unlocked` Programme
                        </h6>
                      </span>

                      <footer className={styles.footer1}>
                        <span>Jonnathan Doe</span>
                      </footer>
                      {this.state.getHeight >= 751 &&
                      this.state.getHeight <= 974 ? (
                        <></>
                      ) : (
                        <hr />
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.getHeight === 1024
                      ? "col-xl-12 col-md-12"
                      : "  col-xl-12 col-lg-12 col-md-6 col-sm-6 col-xs-12"
                  }
                >
                  <div
                    className="cardView"
                  >
                     <div className={styles.card_body3}>
                      <span>
                        <h6
                          className={
                            this.state.getHeight <= 425
                              ? "backGround3"
                              : this.state.check
                              ? "backGround2"
                              : "backGround1"
                          }
                        >
                          Warning Letter For Ankaleshwar Plant Sends Wockhardt
                          Shares To Near 2.5- Year Low
                        </h6>
                      </span>
                      <footer className={styles.footer1}>
                        <span>Alice Doe</span>
                      </footer>
                    </div>
                  </div>
                </div>
                {this.state.getHeight <= 425 ? (
                  <h5 className={styles.read}>
                    <b>
                      Read more &nbsp;{" "}
                      <img src={svg} width="50px" height="16px" alt="das" />
                    </b>
                  </h5>
                ) : (
                  <></>
                )}
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
