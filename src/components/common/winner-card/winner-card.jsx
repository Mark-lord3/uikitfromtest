import React from "react";
import "./styles.scss";

const WinnerCard = ({ name, photoUrl, drawDate, description, ticketNumber }) => {
  return (
    <div className='winner-card'>
      <div className='winner-card-header'>
        <p>Winner</p>
      </div>

      <div className='winner-card-body'>
        <p className='win-date'>{drawDate}</p>
        {/* <p className="win-title">Grand Prize Draw</p> */}
        <div className='winner-card-image'>
          <img src={photoUrl} alt='' />
          <div className='winner-card-winner-name'>
            <p>{name}</p>
          </div>
        </div>

        <div className='winner-card-description-section'>
          <div className='winner-card-description'>{description}</div>
        </div>
      </div>
      <div className='winner-card-footer-container'>
        {ticketNumber ? (
          <div className='winner-card-footer'>
            <p>Ticket Number: </p>
            <p>7b132241-9db9-453-819d-81d78e38d38</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WinnerCard;
