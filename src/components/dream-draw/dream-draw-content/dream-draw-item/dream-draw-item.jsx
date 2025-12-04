import React from 'react';

export default function DreamDrawItem(props) {
  const { icon, title } = props;
  return (
    <div className="dream-draw-item">
      <div className="dream-draw-item__icon">{icon}</div>
      <div className="dream-draw-item__title">{title}</div>
    </div>
  );
}
