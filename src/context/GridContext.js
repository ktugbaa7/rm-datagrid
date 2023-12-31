import React, { createContext, useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { data } from "../util/data";

const DataGridContext = createContext();

export const GridProvider = ({ children }) => {
  const [newData, setNewData] = useState([]);

  const [show, setShow] = useState(false); //modal gizle/göster
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // interface
  const initialValues = {
    link: "",
    name: "",
    description: "",
  };

  // zorunlu alan doğrulama
  const validationSchema = Yup.object({
    link: Yup.string()
    .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Lütfen geçerli bir adres giriniz!"
    )
    .required("Lütfen sosyal medya bağlantınızı giriniz."),
    name: Yup.string().required("Lütfen sosyal medya adınızı giriniz."),
    description: Yup.string().required("Lütfen açıklama giriniz."),
  });

  const onSubmit =  (values) => {
    
    //setNewData((prevData) => [...prevData, values])
     //var olan verinin üzerine ekle
    const prevData = [...newData, values];
    setNewData(prevData);
    localStorage.setItem("localData", JSON.stringify(prevData));
    formik.resetForm(initialValues);
  
  }

  const formik = useFormik( {
    initialValues,
    validationSchema,
    onSubmit,
  })
  
  useEffect(() => {
   const localData = JSON.parse(localStorage.getItem("localData"));
   if(localData) {
    setNewData(localData);
   }else{
    setNewData(data)
   }
  }, []); //updateData

  const values = {
    show,
    handleClose,
    handleShow,
    formik,
    newData,
  };

  return (
    <DataGridContext.Provider value={values}>
      {children}
    </DataGridContext.Provider>
  );
};


// componentlerde kullanılmak üzere useContext ile dışarı aktarılır.
export const useDataGrid = () => {
  const context = useContext(DataGridContext);

  if (context === undefined) {
    throw new Error("hata");
  }
  return context;
};
