import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddNewAccount({ show, handleClose }) {
  
  return (
    <div>
      <Modal show={show} onHide={handleClose} style={{ borderRadius: "13px"}}>
        <Modal.Header closeButton style={{border: "none"}}>
          
        </Modal.Header>
        <Modal.Body style={{padding: "10px 30px 16px 30px"}}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontSize: 14, paddingLeft: 5, fontWeight: 600}}>Sosyal Medya Linki</Form.Label>
              <Form.Control
                type="email"
                style={{borderRadius: "38px", lineHeight:2, fontSize: 14}}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontSize: 14, paddingLeft: 5, fontWeight: 600}}>Sosyal Medya Adı</Form.Label>
              <Form.Control
                type="email"
                style={{borderRadius: "38px", lineHeight:2, fontSize: 14}}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontSize: 14, paddingLeft: 5, fontWeight: 600}}>Açıklama</Form.Label>
              <Form.Control
                type="email"
                style={{borderRadius: "38px", lineHeight:2, fontSize: 14}}
                
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer style={{border: "none", padding: "10px 30px 40px 30px"}}>
          <Button variant="secondary" onClick={handleClose} style={{borderRadius: "38px", background: "#F5F7FF", border: "none", color: "#744BFC", }}>
            Vazgeç
          </Button>
          <Button variant="primary" onClick={handleClose} style={{borderRadius: "38px", background: "#744BFC", border: "none"}} >
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddNewAccount