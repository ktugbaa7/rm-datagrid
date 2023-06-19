import React from "react";
import {
  DataGrid,
  Column,
  Button,
  Toolbar,
  Item,
  Scrolling,
  FilterRow,
  SearchPanel,
  Editing,
  ValidationRule,
  Paging,
  Pager,
} from "devextreme-react/data-grid";
import { data } from "../../util/data";

function Grid() {
  return (
    <div className="grid">
      <DataGrid
        id="dataGrid"
        dataSource={data}
        showBorders={true}
        columnAutoWidth={true}
        remoteOperations={true}
      >
        <Editing
          allowAdding={true}
          texts={{
            addRow: "Yeni Hesap Ekle",
          }}
          mode="popup"
        ></Editing>
        <Scrolling rowRenderingMode="virtual" />

        <Column dataField="link" caption={"Sosyal Medya Linki"} />
        <Column dataField="name" caption={"Sosyal Medya Adı"} />
        <Column dataField="description" caption={"Açıklama"} />
      </DataGrid>
    </div>
  );
}

export default Grid;
