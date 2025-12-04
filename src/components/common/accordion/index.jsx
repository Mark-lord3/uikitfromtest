import React, { useRef, useState } from "react";
import "./styles.scss";

const AccordionItem = ({
  question,
  answer,
  icon,
  isOpen,
  onClick,
  color,
  id,
  isSpecial = false,
}) => {
  const contentHeight = useRef();
  return (
    <div className={`wrapper ${isSpecial ? "wrapper--special" : ""}`}>
      <h3>
        <button
          id={`accordion-${id}`}
          className={`question-container ${isOpen ? "active " : ""}${color ? color : ""}`}
          onClick={onClick}
          aria-controls={`accordion-panel-${id}`}
          aria-expanded={`${isOpen ? "true" : "false"}`}
        >
          <span className='question-content'>
            {Boolean(icon) && (
              <span className='question-content-icon'>
                <img src={icon} alt={question} />
              </span>
            )}
            <span>{question}</span>
          </span>
          <span className='question-content-sign'>{isOpen ? "-" : "+"}</span>
        </button>
      </h3>

      <div
        id={`accordion-panel-${id}`}
        ref={contentHeight}
        className='answer-container'
        style={isOpen ? { height: contentHeight.current.scrollHeight } : { height: "0px" }}
        role='region'
        aria-labelledby={`accordion-${id}`}
      >
        <div className={`answer-content ${color ? color : ""}`}>{answer}</div>
      </div>
    </div>
  );
};

const Accordion = ({ faqs, color }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='faq-questions-container'>
      {faqs.map((item, index) => (
        <AccordionItem
          id={index}
          color={color}
          isSpecial={item.isSpecial}
          key={item._id}
          question={item.title}
          answer={item.description}
          icon={item.iconUrl}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
