import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiFilter, HiPlus } from "react-icons/hi";

import {
  DataGrid,
  Column,
  Scrolling,
  SearchPanel,
  Paging,
  Pager,
  RequiredRule,
} from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { data } from "../../util/data";
import { Button, Container } from "react-bootstrap";
import AccountModal from "../Modal/AccountModal";

function Grid() {
  const [dataItem, setDataItem] = useState([]);

  // useEffect(() => {
  //   const storedData = localStorage.getItem("gridData");
  //   if (storedData) {
  //     setDataItem(JSON.parse(storedData));
  //   } else {
  //     setDataItem(data);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("gridData", JSON.stringify(data));
  // }, [dataItem]);

  const columns = [
    { dataField: "Link", caption: "Sosyal Medya Linki" },
    { dataField: "Name", caption: "Sosyal Medya Adı" },
    { dataField: "Description", caption: "Açıklama" },
  ];
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="grid-card">
      <Container>
        <div className="gridbar" style={{ backgroundColor: "yellow", }}>
          <div className="gridbar__search">
            <CiSearch className="gridbar__search-icon" />
            <button>
              <HiFilter className="gridbar__filt-icon" />
            </button>
          </div>
          <Button
            variant="primary"
            type="submit"
            onClick={handleShow}
            className="gridbar__add-button"
          >
            <HiPlus /> Yeni Hesap Ekle
          </Button>{" "}
        </div>

        <AccountModal show={show} handleClose={handleClose} />
        
        <DataGrid
          id="dataGrid"
          dataSource={data}
          showBorders={true}
          columnAutoWidth={true}
          remoteOperations={true}
          rowAlternationEnabled={true}
          allowColumnReordering={true}
          columns={columns}
        >
          <SearchPanel
            visible={true}
            placeholder="Search objects..."
          />
          {/* buradaki columsları silebiliriz yeni hesap ekleme işlemini yap kontrol et*/}
          <Column dataField="link" caption={"Sosyal Medya Linki"}>
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
          <Paging defaultPageSize={6} defaultPageIndex={0} />
          {/* Render pager component */}
          <Pager
            visible={true}
            allowedPageSizes={[2, 4, 6, 8, "all"]}
            displayMode={"compact"}
            showPageSizeSelector={true}
            showNavigationButtons={true}
          />
        </DataGrid>
        <span className="text-span">Show:</span>
      </Container>
    </div>
  );
}

export default Grid;
