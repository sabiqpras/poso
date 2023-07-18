import React from "react";

const FooterDetails = (props) => {
  return (
    <div>
      <div>
        <div className="font-bold font-primary text-xl">
          <p>{props.title}</p>
        </div>
        <div className="font-secondary font-thin">
          <p className={props.addStyle}>{[props.detail]}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterDetails;
