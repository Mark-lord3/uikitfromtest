import React from "react";
import TitleText from "../../../../common/title-text/title-text";
import SubtitleText from "../../../../common/subtitle-text/subtitle-text";

export default function HeroInfoItem({ title, description, renderSubtitle, index }) {
  return (
    <div className='hero-info-item-slide'>
      <div className={`hero-info-item hero-info-item--${index}`}>
        <div className='hero-info-item__icon'>
          <svg
            width='80'
            height='80'
            viewBox='0 0 80 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g>
              <path
                d='M68.3241 11.7237C61.081 4.47828 51.0799 0 40.025 0C28.9702 0 18.9668 4.47828 11.7237 11.7237C4.48057 18.9691 0 28.9656 0 40.0228C0 62.1278 17.9177 80.0478 40.025 80.0478C51.0776 80.0478 61.0787 75.5695 68.3241 68.3241C75.5672 61.081 80.0478 51.0776 80.0478 40.0228C80.0478 28.9679 75.5695 18.9691 68.3241 11.7237ZM15.7484 26.7735L40.1854 15.7393L64.4712 27.0964L64.304 52.7131C53.9547 59.521 43.7497 59.9654 39.8922 59.9379C27.5042 59.8532 18.7698 54.5502 15.5766 52.3878L15.7484 26.7712V26.7735Z'
                fill='#043B3B'
              />
              <path
                d='M64.4705 27.4104L64.3029 53.013C53.9601 59.8197 43.757 60.2607 39.9006 60.2358C27.524 60.1489 18.7927 54.8482 15.5977 52.687L15.7715 27.0843L40.1956 16.0576L64.4705 27.4104Z'
                fill='#E2BCC0'
              />
              <path
                d='M25.3746 16.1222L25.3404 21.4167L19.4906 24.0375H19.4844L19.5372 16.085L25.3746 16.1222Z'
                fill='#E2BCC0'
              />
              <path
                d='M68.1393 55.1468C68.1393 55.5443 67.9344 55.9138 67.6052 56.1281C62.6869 59.3016 57.2532 61.6895 51.5555 63.0403C47.7922 63.9315 43.8457 64.3725 39.8806 64.3663C35.9155 64.3197 31.9722 63.8228 28.2244 62.8851C22.5454 61.4598 17.1426 59.0004 12.2678 55.7617C11.9417 55.5443 11.743 55.1717 11.7461 54.7742C11.7523 53.8271 12.8205 53.2744 13.6029 53.8178L14.3574 54.3457C21.974 59.6494 30.8699 62.264 39.8931 62.3354C48.9162 62.3851 57.8462 59.8885 65.5342 54.6841L66.2949 54.1656C67.0836 53.6315 68.1455 54.1997 68.1393 55.1468Z'
                fill='#E2BCC0'
              />
              <path
                d='M54.9866 41.7778L54.9803 42.5262C54.9803 43.1069 54.5053 43.5758 53.9184 43.5758C53.344 43.5696 52.8752 43.0945 52.8752 42.5138L52.8814 41.8648C52.8876 41.1506 52.7944 40.5358 52.6081 40.0389C52.4218 39.5576 52.161 39.1819 51.8194 38.8838C51.4468 38.5701 51.0308 38.3559 50.5433 38.2348C50.0154 38.1012 49.4131 38.0329 48.7641 38.0267H48.6834C48.1276 38.0267 47.5656 38.0857 47.0129 38.1944C46.5099 38.3093 46.0752 38.508 45.7274 38.7906C45.3734 39.0794 45.094 39.48 44.8922 39.9892C44.6841 40.5047 44.5786 41.1661 44.5724 42.0138V42.4548C44.5661 43.0355 44.0911 43.5044 43.5104 43.5044C42.9298 43.4981 42.4609 43.023 42.4609 42.4424L42.4672 41.8679C42.4796 40.0172 43.0167 38.6043 44.06 37.6634C45.0971 36.7287 46.6682 36.2536 48.7206 36.2536H48.7858L48.8262 36.2412H48.8542C50.7855 36.2536 52.3038 36.7225 53.3657 37.6324C54.4494 38.5422 54.9959 39.9395 54.9834 41.7716L54.9866 41.7778Z'
                fill='#043B3B'
              />
              <path
                d='M37.8709 41.6593L37.8647 42.4077C37.8647 42.9884 37.3958 43.4573 36.8027 43.4573C36.2097 43.4573 35.7532 42.9822 35.7532 42.3953L35.7595 41.7525C35.7657 41.0321 35.6725 40.4141 35.4924 39.9204C35.2906 39.4205 35.0391 39.0571 34.6975 38.7715C34.3312 38.4578 33.9151 38.2498 33.4276 38.1163C32.8873 37.9827 32.2912 37.9144 31.6484 37.9144H31.5677C30.9933 37.9144 30.4313 37.9734 29.891 38.0759C29.3911 38.1846 28.9626 38.3895 28.6086 38.6721C28.2422 38.9733 27.9659 39.3801 27.7734 39.8769C27.5591 40.3862 27.4536 41.0476 27.4473 41.8953V42.3363C27.4411 42.917 26.9723 43.3858 26.3854 43.3858C25.7986 43.3858 25.3359 42.9107 25.3359 42.3239L25.3422 41.7494C25.3546 39.9049 25.8917 38.492 26.9412 37.5449C27.9783 36.6102 29.5557 36.1351 31.6298 36.1351H31.6515L31.7105 36.1289H31.7292C33.6605 36.1413 35.1788 36.604 36.2438 37.5138C37.3275 38.4299 37.874 39.821 37.8616 41.6531L37.8709 41.6593Z'
                fill='#043B3B'
              />
            </g>
            <defs>
              <clipPath>
                <rect width='80' height='80' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className='hero-info-item__title'>{title}</span>
        {/* {typeof content[0] === "string" ? (
          content.map((item, index) => (
            <SubtitleText color='color-5' key={index}>
              {renderSubtitle ? renderSubtitle(item) : item}
            </SubtitleText>
          ))
        ) : (
          <div className='hero-info-item__cols'>
            {content.map(({ text, icon }, index) => (
              <div className={`hero-info-date hero-info-date--${content.length}`} key={index}>
                <SubtitleText color='color-5'>
                  {renderSubtitle ? renderSubtitle(text) : text}
                </SubtitleText>
                <div className='hero-info-date__icon'>{icon}</div>
              </div>
            ))}
          </div>
        )} */}
        {description[0].subtitle ? (
          <div className='hero-info-item__cols'>
            {description.map((item) => (
              <div
                className={`hero-info-date hero-info-date--${description.length}`}
                key={item._id}
              >
                <p className='rui-subtitle-text rui-subtitle-text--bold'>{item.subtitle}</p>
                <SubtitleText color='color-5'>
                  {renderSubtitle ? renderSubtitle(item.text) : item.text}
                </SubtitleText>
                {item.iconUrl && (
                  <div className='hero-info-date__icon'>
                    <img src={item.iconUrl} alt='info icon' />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          description.map((item) => (
            <SubtitleText color='color-5' key={item._id}>
              {renderSubtitle ? renderSubtitle(item.text) : item.text}
            </SubtitleText>
          ))
        )}
      </div>
    </div>
  );
}
