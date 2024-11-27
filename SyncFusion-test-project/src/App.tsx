import "./App.css";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  ColumnDirective,
  ColumnsDirective,
  TreeGridComponent,
} from "@syncfusion/ej2-react-treegrid";
import { sortData } from "./sampleData/data";

registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);

function App() {
  return (
    <>
      <div>
        <h1>SyncFusion test Project</h1>
        <p>TreeGridComponent</p>
        <div>
          <TreeGridComponent
            dataSource={sortData}
            treeColumnIndex={1}
            childMapping="subtasks"
          >
            <ColumnsDirective>
              <ColumnDirective
                field="Category"
                headerText="Category"
                width="150"
              />
              <ColumnDirective
                field="orderName"
                headerText="Order Name"
                width="170"
              />
              <ColumnDirective
                field="orderDate"
                headerText="Order Date"
                width="130"
                format="yMd"
                textAlign="Right"
                type="date"
              />
              <ColumnDirective
                field="price"
                headerText="Price"
                width="100"
                textAlign="Right"
                type="number"
                format="C0"
              />
            </ColumnsDirective>
          </TreeGridComponent>
        </div>
      </div>
    </>
  );
}

export default App;
