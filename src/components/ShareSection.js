import React, { Component } from 'react'
import {FacebookShareButton, TwitterShareButton, WhatsappShareButton} from 'react-share';
import {FacebookIcon, TwitterIcon, WhatsappIcon,} from 'react-share';

export class ShareSection extends Component {
    render() {
        return (
            <>
              <div className={this.props.styleContainer}>
                  <p id="share-text"> Share your result:</p>

                  <div className="facebook-container">
                  <FacebookShareButton
                  url={this.props.fbUrl}
                  quote={this.props.fbQuote}
                  hashtag={this.props.hashtag}
                  className="share-button">
                  <FacebookIcon
                    size={52}
                    round />
                  </FacebookShareButton>
                  </div>

                  <div className="twitter-container">
                  <TwitterShareButton
                    url={this.props.twUrl}
                    title={this.props.twTitle}
                    className="share-button">
                    <TwitterIcon
                      size={52}
                      round />
                  </TwitterShareButton>
                </div>

                <div className="whatsapp-container">
                  <WhatsappShareButton
                    url={this.props.wpUrl}
                    title={this.props.wpTitle}
                    separator=":: "
                    className="share-button">
                    <WhatsappIcon size={52} round />
                  </WhatsappShareButton>
                </div>

             </div>
                
            </>
        )
    }
}

export default ShareSection
