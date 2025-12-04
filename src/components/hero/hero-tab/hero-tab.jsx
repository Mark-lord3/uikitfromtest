import React from 'react';

export default function HeroTab(props) {
  const { id, title, selected, dark, onSelect } = props;

  const handleClickTab = () => {
    onSelect(id);
  };

  return (
    <button
      id={`${id}-tab`}
      role="tab"
      aria-selected={selected ? 'true' : 'false'}
      aria-controls={`${id}-tabpanel`}
      className={['hero-block__tab', dark && 'hero-block__tab_dark', selected && 'hero-block__tab_selected']
        .filter(Boolean)
        .join(' ')}
      onClick={handleClickTab}
    >
      {title}
    </button>
  );
}
