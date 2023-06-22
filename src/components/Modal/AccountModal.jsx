import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDataGrid } from "../../context/GridContext";

function AddNewAccount() {
  const { show, handleClose, formik } = useDataGrid();

  return (
    <div>
      <Modal show={show} onHide={handleClose} style={{ borderRadius: "13px" }}>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
          <Modal.Body style={{ padding: "10px 30px 16px 30px" }}>
            <Form.Group className="mb-3" controlId="linkForm">
              <Form.Label
                style={{ fontSize: 14, paddingLeft: 5, fontWeight: 600 }}
              >
                Sosyal Medya Linki
              </Form.Label>
              <Form.Control
                type="url"
                style={{ borderRadius: "38px", lineHeight: 2, fontSize: 14 }}
                autoFocus
                {...formik.getFieldProps("link")}
                isValid={formik.touched.link && !formik.errors.link}
                isInvalid={formik.touched.link && !!formik.errors.link}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.link}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="nameForm">
              <Form.Label
                style={{ fontSize: 14, paddingLeft: 5, fontWeight: 600 }}
              >
                Sosyal Medya Adı
              </Form.Label>
              <Form.Control
                type="text"
                style={{ borderRadius: "38px", lineHeight: 2, fontSize: 14 }}
                {...formik.getFieldProps("name")}
                isValid={formik.touched.name && !formik.errors.name}
                isInvalid={formik.touched.name && !!formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="descForm">
              <Form.Label
                style={{ fontSize: 14, paddingLeft: 5, fontWeight: 600 }}
              >
                Açıklama
              </Form.Label>
              <Form.Control
                type="text"
                style={{ borderRadius: "38px", lineHeight: 2, fontSize: 14 }}
                {...formik.getFieldProps("description")}
                isValid={
                  formik.touched.description && !formik.errors.description
                }
                isInvalid={
                  formik.touched.description && !!formik.errors.description
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.description}
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer
            style={{ border: "none", padding: "10px 30px 40px 30px" }}
          >
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{
                borderRadius: "38px",
                background: "#F5F7FF",
                border: "none",
                color: "#744BFC",
              }}
            >
              <span>Vazgeç</span>
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={handleClose}
              disabled={!(formik.dirty && formik.isValid)}
              style={{
                borderRadius: "38px",
                background: "#744BFC",
                border: "none",
              }}
            >
              <span>Kaydet</span>
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default AddNewAccount;
