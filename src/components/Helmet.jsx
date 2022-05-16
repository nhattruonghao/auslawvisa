import React from 'react';
import PropTypes from 'prop-types';
import background from '../assets/images/backgroundhelmet.png';

function Helmet(props) {

    function hexToRGB(h) {
        let r = 0, g = 0, b = 0;
      
        // 3 digits
        if (h.length == 4) {
          r = "0x" + h[1] + h[1];
          g = "0x" + h[2] + h[2];
          b = "0x" + h[3] + h[3];
      
        // 6 digits
        } else if (h.length == 7) {
          r = "0x" + h[1] + h[2];
          g = "0x" + h[3] + h[4];
          b = "0x" + h[5] + h[6];
        }
        
        return ""+ +r + "," + +g + "," + +b+"";
      }
    const style = {
        backgroundColor: `rgba(${hexToRGB(props.bgcolor)},0.5)`,
        boxShadow: `rgba(${hexToRGB(props.bgcolor)}, 0.5) 0px 3px 6px, rgba(${hexToRGB(props.bgcolor)}, 0.23) 0px 3px 6px`
    }
    const style2 = {
        background: `linear-gradient(180deg, rgba(${hexToRGB(props.bgcolor)},0.5) 0%, rgba(255,255,255,0) 100%)`
    }
    const title = props.title;
  return (
    <div className="helmet" style={style}>
        <div className="helmet__img" style={{backgroundImage: `url(${background})`}}>
            </div>
        <div className="helmet__gradient" style={style2}>
        </div>
    </div>
  )
}


Helmet.propTypes = {
    bgcolor: PropTypes.string.isRequired,
}

export default Helmet