import React, { useState } from "react";
import "../App.css";
import ClickableDiv from "./divClick";
import PClick from "./pClick";

function Customer(props) {
  const [bgColor, setBgColor] = ClickableDiv(null);
  const [hoveredElement, setHoveredElement] = PClick();

  return (
    <div
      className="body-container"
      style={{ background: bgColor || undefined }}
      onClick={setBgColor}
    >
      <div
        className="fixed-body type_fix"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ backgroundColor: "#ef9a9a", flex: 3 }}>
          <CustomerContract
            contractNumber={props.contractNumber}
            houseAddress={props.houseAddress}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row", flex: 4 }}>
          <CustomerId
            tenantName={props.tenantName}
            tenantBirth={props.tenantBirth}
            tenantContact={props.tenantContact}
            landlordName={props.landlordName}
            landlordBirth={props.landlordBirth}
            landlordContact={props.landlordContact}
          />
        </div>
      </div>
      <div
        className="scroll-body type_move"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <CustomerInfo
          receptionDate={props.receptionDate}
          complaint={props.complaint}
          terminationNotice={props.terminationNotice}
          declarationNoticePublic={props.declarationNoticePublic}
          tenantRightsRegist={props.tenantRightsRegist}
          tenantRightsDecision={props.tenantRightsDecision}
          specialRemarks={props.specialRemarks}
          housingHandover={props.housingHandover}
          returnNotice={props.returnNotice}
          insuranceClainTransfer={props.insuranceClainTransfer}
          test1={props.test1}
          test2={props.test2}
          test3={props.test3}
          test4={props.test4}
          test5={props.test5}
          test6={props.test6}
          test7={props.test7}
          test8={props.test8}
        />
      </div>
    </div>
  );
}

function CustomerContract(props) {
  return (
    <>
      <p
        style={{
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        {props.contractNumber}
      </p>
      <p
        style={{
          whiteSpace: "normal",
          wordWrap: "break-word",

          overflowWrap: "break-word",
        }}
      >
        {props.houseAddress}
      </p>
    </>
  );
}

function CustomerId(props) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#fffde7",
          }}
        >
          <p
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
              wordBreak: "break-all",
            }}
          >
            <span style={{ backgroundColor: "white", color: "red" }}>입주</span>{" "}
            {props.tenantName}
          </p>
          <p
            style={{
              whiteSpace: "normal",
            }}
          >
            {props.tenantBirth}
          </p>
          <p
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
              wordBreak: "break-all",
            }}
          >
            {props.tenantContact}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#c8e6c9",
          }}
        >
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#c8e6c9",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            <span style={{ backgroundColor: "white", color: "red" }}>임대</span>{" "}
            {props.landlordName}
          </p>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#c8e6c9",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            {props.landlordBirth}
          </p>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#c8e6c9",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            {props.landlordContact}
          </p>
        </div>
      </div>
    </>
  );
}

function CustomerInfo(props) {
  return (
    <>
      <p>{props.receptionDate}</p>
      <p>{props.complaint}</p>
      <p>{props.terminationNotice}</p>
      <p>{props.declarationNoticePublic}</p>
      <p>{props.tenantRightsRegist}</p>
      <p>{props.tenantRightsDecision}</p>
      <p>{props.specialRemarks}</p>
      <p>{props.housingHandover}</p>
      <p>{props.returnNotice}</p>
      <p>{props.insuranceClainTransfer}</p>
      <p>{props.test1}</p>
      <p>{props.test2}</p>
      <p>{props.test3}</p>
      <p>{props.test4}</p>
      <p>{props.test5}</p>
      <p>{props.test6}</p>
      <p>{props.test7}</p>
      <p>{props.test8}</p>
    </>
  );
}

function Update(props) {
  return;
}

function TerminationFinish(props) {
  return;
}
export default Customer;
