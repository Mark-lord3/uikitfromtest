import React from "react";
import imageLogo from "../../../images/charity/fr-logo.png";

// type = "single" | "list"
export default function CharityContent({ type = "single", children }) {
  return (
    <div className={`rui-charities-content rui-charities-content_${type}`}>
      {/* <div className='rui-left-side'>
        <div className='charities-content__logo'>
          <img src={imageLogo} alt='fundraising regulator' />
        </div>
      </div> */}
      {children}
    </div>
  );
}
