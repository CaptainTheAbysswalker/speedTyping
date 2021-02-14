import { React } from "react";
import { Card } from "react-bootstrap";
import Mistakes from "../Mistakes/Mistakes";
import Speed from "../Speed/Speed";

const Stats = () => {
  return (
    <Card style={{ width: "15rem", alignItems: "center" }}>
      <Card.Title>Stats</Card.Title>
      <Mistakes />
      <Speed />
    </Card>
  );
};

export default Stats;
