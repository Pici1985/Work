import "./App.css";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  ColumnDirective,
  ColumnsDirective,
  TreeGridComponent,
  Inject,
  Page,
  Filter,
  Toolbar,
  TreeGrid,
} from "@syncfusion/ej2-react-treegrid";
import { sortData } from "./sampleData/data";
import { ChategoryItem, Item } from "./sampleData/moreData";
import styles from "./styles/TreeTable.module.scss";
import { useRef } from "react";
import { CheckBoxChangeEventArgs } from "@syncfusion/ej2-grids";
import { originalData } from "./sampleData/originalDataShape";
import { transformData } from "./utils/DataTransform";

registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);

export declare type FilterHierarchyMode = "Parent" | "Child" | "Both" | "None";

function App() {
  const hierarchyMode: FilterHierarchyMode = "Both";

  const searchOptions = {
    fields: ["mainName", "orderName"],
    key: "",
    hierarchyMode: hierarchyMode,
  };

  const toolbarOptions = ["Search"];

  // this is for prepopulating checkboxes
  const treegridRef = useRef<TreeGrid | null>(null);

  const handleDataBound = () => {
    const treegrid = treegridRef.current;
    if (treegrid) {
      treegrid.selectCheckboxes([4, 23]);
    }
  };

  //this is for selecting checkboxes
  const onCheckboxChange = (args: CheckBoxChangeEventArgs) => {
    console.log(
      `Row Index:", ${args.selectedRowIndexes} + "Checked State:", ${args.checked} `
    );
  };

  //this is required for the generic version
  const childKeys = [
    "subdivisions",
    "supercategories",
    "categories",
    "subcategories",
  ];

  // Transform the original data
  const transformedData: (ChategoryItem | Item)[] = transformData(originalData);

  return (
    <div>
      <div style={{ margin: "50px" }}>Working Example of nested rows</div>
      <div>
        <TreeGridComponent
          dataBound={handleDataBound}
          checkboxChange={onCheckboxChange}
          // dataSource={originalData}
          dataSource={transformedData}
          treeColumnIndex={0}
          childMapping="children"
          autoCheckHierarchy={true}
          allowSelection={true}
          allowFiltering={true}
          filterSettings={{
            ignoreAccent: true,
            type: "Menu",
          }}
          searchSettings={searchOptions}
          ref={(grid) => (treegridRef.current = grid || null)}
          selectionSettings={{
            type: "Multiple",
            persistSelection: true,
            checkboxOnly: true,
            mode: "Both",
            checkboxMode: "Default",
          }}
          // selectedRowIndex={1}
          toolbar={toolbarOptions}
        >
          <Inject services={[Page, Filter, Toolbar]} />
          <ColumnsDirective>
            <ColumnDirective
              isPrimaryKey={true}
              field="mainName"
              headerText="mainName"
              width="150"
              textAlign="Left"
              showCheckbox={true}
            />
            <ColumnDirective
              field="orderName"
              headerText="orderName"
              width="170"
              textAlign="Left"
            />
          </ColumnsDirective>
        </TreeGridComponent>
      </div>
    </div>
  );
}

export default App;
