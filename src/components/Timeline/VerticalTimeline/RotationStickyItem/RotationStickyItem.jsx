import React from "react";
import "./styles.scss";

export default function RotationStickyItem(props) {
  const { text = "", widget } = props;

  const styles = {
    letterSpacing: "0.6px",
    fontSize: "14px",
  };

  if (widget && widget.data) {
    styles.letterSpacing = widget.data.letterSpacing
      ? widget.data.letterSpacing + "px"
      : styles.letterSpacing;
    styles.fontSize = widget.data.fontSize ? widget.data.fontSize + "px" : styles.fontSize;
  }

  const rotatingText = widget?.data?.text || text;

  return (
    <div id='sticky-point-id' className='sticky-point'>
      <div className='rotation-box'>
        <svg className='rotation-box__text' style={styles} viewBox='0 0 200 200'>
          <path
            id='textPath5'
            d='M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0'
            transform='translate(100,100)'
            fill='none'
            strokeWidth='0'
          ></path>
          <g>
            <text textAnchor='start'>
              <textPath href='#textPath5' startOffset='0%'>
                {rotatingText}
              </textPath>
            </text>
          </g>
        </svg>
        <div className='rotation-box__image'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='empty-image'>
            <path d='m0 0h24v24h-24z' fill='#fff' opacity='0' />
            <g fill='#636162'>
              <path d='m18 3h-12a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-12a3 3 0 0 0 -3-3zm-12 2h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0 -3.52 0l-7.28 6.07v-11.7a1 1 0 0 1 1-1z' />
              <circle cx='8' cy='8.5' r='1.5' />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
