import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Branch Orders</h4>
            <p className={classes.cardCategoryWhite}>
              Here are your orders from branches
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Date", "Item Name", "Branch", "Qty","Order Date","Dispatch Date"]}
              tableData={[
                ["2 Dec 2020 4:00pm", "Belgium Choco 500gm", "Pratap Nagar", "2","1 Dec 2020 3:00 pm", "3 Dec 2020 2:00pm"],
                ["2 Dec 2020 4:00pm", "Black Forest 500gm", "Pratap Nagar", "2","1 Dec 2020 3:00 pm", "3 Dec 2020 2:00pm"],
                ["2 Dec 2020 4:00pm", "Butter Scooth 500gm", "Pratap Nagar", "3","2 Dec 2020 3:00 pm", "3 Dec 2020 2:00pm"],
                ["2 Dec 2020 4:00pm", "Choco Chips 500gm", "Pratap Nagar", "1","2 Dec 2020 3:00 pm", "3 Dec 2020 2:00pm"],
                ["2 Dec 2020 4:00pm", "Mango 500gm", "Pratap Nagar", "2","2 Dec 2020 3:00 pm", "3 Dec 2020 2:00pm"],

                
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Custom Orders
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here are Custom orders recived
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["#", "Ref No", "Delivery On", "Flavour", "Description", "Customer", "Status"]}
              tableData={[
                ["1","8921", "Nov 29,2020", "Mix Fresh Fruit", "Same cake Delivery from pratap nagar", "Raj 8547557575","Done"],
                ["2","8923", "Nov 20,2020", "Black Forest", "Red Velvet Finish", "Vijawa 8547557575","Pending"],
                ["3","8922", "Nov 19,2020", "Royal Opera", "Normal Entry", "Nikhil 8547557575","Done"],
                ["4","8926", "Nov 10,2020", "Dark Chocolate", "No Pic", "Avi 8547557575","Done"],
                ["5","8930", "Nov 29,2020", "Fresh Cream Pineapple", "Pineapple inside the base", "kaustub 8547557575","Done"],
                
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
