import React from 'react';
import Figure from 'react-bootstrap/Figure'
import imgZero from './static/0.png'
import imgOne from './static/1.png'
import imgTwo from './static/2.png'
import imgThree from './static/3.png'
import imgFour from './static/4.png'
import imgFive from './static/5.png'
import imgSix from './static/6.png'
import imgSeven from './static/7.png'
import imgEight from './static/8.png'
import imgNine from './static/9.png'

class Display extends React.Component {

    constructor(props) {
      super(props)
        this.state = {}
        this.getImageSrc = this.getImageSrc.bind(this)
    }

    getImageSrc(prediction) {
        // I am sorry for this horrible code.
        let imgFile = null;
        switch(parseInt(prediction)) {
            case 0:
              imgFile = imgZero;
              break;
            case 1:
                imgFile = imgOne;
              break;
            case 2:
                imgFile = imgTwo;
              break;
            case 3:
                imgFile = imgThree;
              break;
            case 4:
                imgFile = imgFour;
              break;
            case 5:
                imgFile = imgFive;
              break;
            case 6:
                imgFile = imgSix;
              break;
            case 7:
                imgFile = imgSeven;
              break;
            case 8:
                imgFile = imgEight;
              break;
            case 9:
                imgFile = imgNine;
              break;
            default:
                imgFile = imgZero;
          }
        return imgFile
    }

    render() {
        let imageSrc = this.getImageSrc(this.props.prediction)
        return(
            <Figure>
                <Figure.Image
                    width={160}
                    height={160}
                    src={imageSrc}
                />
                <Figure.Caption>
                    {this.props.prediction}
                </Figure.Caption>
            </Figure>
        )
    }
}

export default Display