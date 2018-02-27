import React from 'react';
import CloseIcon from 'react-icons/lib/md/close'
import _ from 'lodash';
import { data } from './data';

export default function Detail({ openedDetail, toggleDialog, contentDetail }) {
  console.log(contentDetail)
  const selectedData = data[contentDetail];

  return (
    <div className={openedDetail ? 'detail detail_opened' : 'detail'}>
      <div className="detail_topLine">
        <div className="detail_topLine_titleWrap">
        </div>
        <CloseIcon
          onClick={toggleDialog}
          className="blackClickableIcon"
        />
      </div>
      <div className="detail_body">
        <img
          src={selectedData.image}
          alt=""
          className={contentDetail === 'sunSMS' ? "detail_mockupImageSunSMS" : "detail_mockupImage"}
        />
        <div className="detail_description">
          <h3>{selectedData.title}</h3>
          <p>{selectedData.description}</p>
          <div className="detail_description_technos">
            <b><p>Tecnologies used:</p></b>
            {selectedData.technos}
          </div>
          <div className="detail_description_cta">
            <a href={selectedData.websiteLink} target="_blank">
              <div className="detail_description_button">Visit website</div>
            </a>
            {_.get(selectedData, 'sourceCode') &&
              <a href={selectedData.sourceCode} target="_blank">
                <div className="detail_description_button">Source code</div>
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
