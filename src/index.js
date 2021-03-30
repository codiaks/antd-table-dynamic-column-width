import "./styles.css";
import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom";

import DynamicColumnsTable from "./DynamicColumnsTable";
import { calculateColumnsWidth } from "./DynamicColumnsHelper";

// Static data
import { columns, source } from "./data";

function App() {
  const maxWidthPerCell = 600;
  const tableHeight = 500;
  const rowKey = "id";

  // This helper function helps to calculate the width for each column
  // based on all table cells - column cell and source cell
  const dataTable = calculateColumnsWidth(columns, source, maxWidthPerCell);

  return (
    <div className="App">
      <DynamicColumnsTable
        columns={dataTable.columns}
        height={tableHeight}
        rowKey={rowKey}
        source={dataTable.source}
        width={dataTable.tableWidth}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
