import { Col } from "antd";
import React from "react";

export const Card = (props) => {
  const { type, title, count } = props;
  const getClassName = () => {
    switch (type) {
      case "confirmed":
        return "#fc3c3c";
      case "recovered":
        return "#90ee90";
      case "death":
        return "#6a5d5d";
      default:
        return "";
    }
  };
  const className = getClassName();
  return (
    <Col sm={24} md={8}>
      <div
        className="sumaryInfo"
        style={{
          borderTop: `4px solid ${className}`,
        }}
      >
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: "500",
          }}
        >
          {title}
        </p>
        <p
          style={{
            color: className,
            fontWeight: "bolder",
            fontSize: "1.5rem",
          }}
        >
          {count}
        </p>
      </div>
    </Col>
  );
};
