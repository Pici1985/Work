import "./App.css";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  ColumnDirective,
  ColumnsDirective,
  TreeGridComponent,
} from "@syncfusion/ej2-react-treegrid";
import { sortData } from "./sampleData/data";
import { realDataExample } from "./sampleData/moreData";
import styles from "./styles/TreeTable.module.scss";

registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);

function App() {
  return (
    <>
      <div>
        <h1>SyncFusion test Project</h1>
        <p>TreeGridComponent - Original Test Data from Docs</p>
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
        <div style={{ margin: "50px" }}>Working Example of nested rows</div>
        <div>
          <TreeGridComponent
            dataSource={realDataExample}
            treeColumnIndex={0}
            childMapping="subcategories"
            className={styles["data-grid__grid"]}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="mainName"
                headerText="Category"
                width="150"
                textAlign="Left"
                showCheckbox={true}
              />
              <ColumnDirective
                field="orderName"
                headerText="Name"
                width="170"
                textAlign="Left"
              />
            </ColumnsDirective>
          </TreeGridComponent>
        </div>
      </div>
    </>
  );
}

export default App;
