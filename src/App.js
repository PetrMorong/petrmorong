import React, { Component } from 'react';

import Detail from './Detail';
import './App.css';
import Person from 'react-icons/lib/md/person'
import Phone from 'react-icons/lib/md/phone'
import Mail from 'react-icons/lib/md/mail'
import School from 'react-icons/lib/md/school'
import Work from 'react-icons/lib/md/work'
import Skills from 'react-icons/lib/md/date-range'
import _ from 'lodash'

class App extends Component {
  constructor(){
    super();
    this.state = {
      openedDetail: false,
      contentDetail: "empty"
    };
  }

  toggleDialog = (name) => {
    this.setState({
      openedDetail: !this.state.openedDetail,
      contentDetail: this.state.openedDetail ? "empty" : name
    });
  }

  render() {
    return (
      <div className="app">
        <div className="container">
            <div className="leftSection">
                <img src={require('./img/Untitled-3.jpg')} className="profileImg" alt="profilePic"/>
                <div className="myName">
                    <h3>Petr Morong</h3>
                    <span>Javascript developer</span>
                </div>
                <div className="itemLeft">
                    <div className="iconWrap">
                        <Person className="whiteIcon"/>
                    </div>
                    <span>There is no elevator to succes, you have to take the stairs.</span>
                </div>
                <div className="itemLeft">
                    <div className="iconWrap">
                        <Phone className="whiteIcon"/>
                    </div>
                    <span>+420 737 211 314</span>
                </div>
                <div className="itemLeft">
                    <div className="iconWrap">
                        <Mail className="whiteIcon"/>
                    </div>
                    <span>moriandr73@gmail.com</span>
                </div>

                <div className="itemLeft">
                    <div className="iconWrap">
                        <School className="whiteIcon"/>
                    </div>
                    <div className="flexCol">
                        <span>VOŠ & SPŠ ŠUMPERK</span>
                        <p className="littleGrey">2012-2016</p>
                        <p className="littleGrey">Information technology</p>
                    </div>
                </div>
                <div className="itemLeft">
                    <div className="iconWrap">
                        <Work className="whiteIcon"/>
                    </div>
                    <div className="flexCol">
                        <span>TOPefekt s.r.o</span>
                        <p className="littleGrey">2016-2017</p>
                        <p className="littleGrey">Hl.Trida 904/8, 78701, Sumperk</p>
                        <p className="littleGrey">Czech republic</p>
                        <a href="http://www.topefekt.com" target="_blank"><p>www.topefekt.com</p></a>
                    </div>
                </div>
                <div className="itemLeft">
                    <div className="iconWrap">
                        <Work className="whiteIcon"/>
                    </div>
                    <div className="flexCol">
                        <span>RCI mobility</span>
                        <p className="littleGrey">2017-now</p>
                        <p className="littleGrey">1 rue de gramont, 75002, Paris</p>
                        <p className="littleGrey">France</p>
                        <a href="http://rcimobility.com" target="_blank"><p>www.rcimobility.com</p></a>
                    </div>
                </div>
                <div className="itemLeft">
                    <div className="iconWrap">
                        <Skills className="whiteIcon"/>
                    </div>
                    <div className="flexCol">
                        <span>Profesional skills</span>
                        <div className="skill">
                            <p className="littleGrey">HTML & CSS</p>
                            <div className="skillLine">
                                <div className="greyLine"></div>
                                <div className="whiteLine skill200"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <p className="littleGrey">Javascript ES6, React JS + Native, Redux</p>
                            <div className="skillLine">
                                <div className="greyLine"></div>
                                <div className="whiteLine skill200"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <p className="littleGrey">Node JS</p>
                            <div className="skillLine">
                                <div className="greyLine"></div>
                                <div className="whiteLine skill170"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <p className="littleGrey">PHP, Nette</p>
                            <div className="skillLine">
                                <div className="greyLine"></div>
                                <div className="whiteLine skill170"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <p className="littleGrey">Sketch</p>
                            <div className="skillLine">
                                <div className="greyLine"></div>
                                <div className="whiteLine skill170"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <p className="littleGrey">Creative thinking</p>
                            <div className="skillLine">
                                <div className="greyLine"></div>
                                <div className="whiteLine skill230"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightSection">
                <div className="rightRow">
                    <div className="rightItemWrap" onClick={_.partial(this.toggleDialog, 'renostav')}>
                        <img src={require('./img/Renda.JPG')} alt=""/>
                        <div className="rightItemLabel bgRed">
                            <span>Renostav</span>
                            <span className="labelGrey">Presentational website</span>
                        </div>
                    </div>
                    <div className="rightItemWrap" onClick={_.partial(this.toggleDialog, 'penzionVanek')}>
                        <img src={require('./img/Vanek.JPG')} alt=""/>
                        <div className="rightItemLabel bgGreen">
                            <span>Penzion Vanek</span>
                            <span className="labelGrey">Presentational website</span>
                        </div>
                    </div>
                </div>
                <div className="rightRow">
                    <div className="rightItemWrap" onClick={_.partial(this.toggleDialog, 'hydraulikServis')}>
                        <img src={require('./img/hydra.JPG')} alt=""/>
                        <div className="rightItemLabel bgBlue">
                            <span>Hydraulik servis</span>
                            <span className="labelGrey">Presentational website</span>
                        </div>
                    </div>
                    <div className="rightItemWrap" id="bulkgate" onClick={_.partial(this.toggleDialog, 'bulkgate')}>
                        <img src={require('./img/Výstřižek.JPG')} alt=""/>
                        <div className="rightItemLabel bgBulkgate">
                            <span>Bulkgate</span>
                            <span className="labelGrey">Web app for sending SMS campaings</span>
                        </div>
                    </div>
                </div>
                <div className="rightRow">
                    <div className="rightItemWrap" onClick={_.partial(this.toggleDialog, 'sunSMS')}>
                        <img src="https://i.imgur.com/DiOXIK9.jpg" alt=""/>
                        <div className="rightItemLabel bgSunSms">
                            <span>SunSMS</span>
                            <span className="labelGrey">App for sending SMS campaings</span>
                        </div>
                    </div>
                    <div className="rightItemWrap" onClick={_.partial(this.toggleDialog, 'renaultMobility')}>
                        <img src="https://i.imgur.com/x5aq8DV.png" alt=""/>
                        <div className="rightItemLabel bgRenault">
                            <span>Renault mobility</span>
                            <span className="labelGrey">Web app for car sharing</span>
                        </div>
                    </div>
                </div>
                <div className="rightRow">
                    <div className="rightItemWrap" onClick={_.partial(this.toggleDialog, 'glide')}>
                        <img src="https://i.imgur.com/79I6f12.png" alt=""/>
                        <div className="rightItemLabel bgGlide">
                            <span>Glide Back Office</span>
                            <span className="labelGrey">Back office website for car sharing</span>
                        </div>
                    </div>
                    <div className="rightItemWrap" onClick={_.partial(this.toggleDialog, 'nookpad')}>
                        <img src="https://i.imgur.com/WVXmi9n.png" alt=""/>
                        <div className="rightItemLabel bgNookpad">
                            <span>Nookpad</span>
                            <span className="labelGrey">Web app for listing, renting appartements</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Detail
          openedDetail={this.state.openedDetail}
          toggleDialog={this.toggleDialog}
          contentDetail={this.state.contentDetail}
        />
      </div>
    );
  }
}

export default App;
