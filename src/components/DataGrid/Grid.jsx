import React, { useEffect, useState } from "react";
import {
  DataGrid,
  Column,
  Scrolling,
  SearchPanel,
  Paging,
  Pager,
  RequiredRule,
  Sorting
} from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { data } from "../../util/data";
import { Button, Container } from "react-bootstrap";
import AccountModal from "../Modal/AccountModal";
import { CiSearch } from "react-icons/ci";
import { HiFilter, HiPlus } from "react-icons/hi";
import { useDataGrid } from "../../context/GridContext";

function Grid() {
  
  const {show, handleClose, handleShow, newData} = useDataGrid();

  const columns = [
    { dataField: "link", caption: "Sosyal Medya Linki", width: 370 },
    { dataField: "name", caption: "Sosyal Medya Adı", width: 320},
    { dataField: "description", caption: "Açıklama" },
  ];

  return (
    <div className="grid-card">
      <Container>
        <div className="gridbar">
          <div className="gridbar__search">
            <CiSearch className="gridbar__search-icon" />
            <HiFilter className="gridbar__filt-icon" />
          </div>
          <Button
            variant="primary"
            type="submit"
            onClick={handleShow}
            className="gridbar__add-button"
          >
            <HiPlus style={{ fontSize: 18 }} /> Yeni Hesap Ekle
          </Button>{" "}
          <Button
            variant="primary"
            type="submit"
            onClick={handleShow}
            className="gridbar__btn"
          >
            <HiPlus style={{ fontSize: 18 }} />
          </Button>{" "}
        </div>

        <AccountModal show={show} handleClose={handleClose} />

        <DataGrid
          id="gridData"
          dataSource={newData}
          showBorders={true}
          columnAutoWidth={true}
          rowAlternationEnabled={true}
          allowColumnReordering={true}
          allowColumnResizing={true}
          showAllText="All"
          showColumnLines={true}
          columns={columns}
        >
          <SearchPanel  rawData={newData} visible={true} placeholder="Search objects..." />

          <Column
            dataField="link"
            caption={"Sosyal Medya Linki"}
            allowSorting={true}
            visible={true}
          >
            {" "}
            <RequiredRule />
            {""}
          </Column>
          <Column dataField="name" caption={"Sosyal Medya Adı"}>
            {" "}
            <RequiredRule />{" "}
          </Column>
          <Column dataField="description" caption={"Açıklama"}>
            {" "}
            <RequiredRule />{" "}
          </Column>
          <Scrolling rowRenderingMode="virtual" />
          {/* Enable paging with default page size */}
          <Paging defaultPageSize={10}  />
          <Sorting mode="multiple" />
          {/* Render pager component */}
          <Pager
            visible={true}
            allowedPageSizes={[4, 8, 10, "all"]}
            displayMode="compact"
            showPageSizeSelector={true}
            showInfo={false}
            showNavigationButtons={true}
          />
        </DataGrid>
        <span className="text-span">Show:</span>
      </Container>
    </div>
  );
}

export default Grid;
