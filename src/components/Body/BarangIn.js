import React from 'react'
import { Form, Button, FormGroup, Container, Card, Col, Breadcrumb } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import './body.css'

export default function BarangIn() {

    const formik = useFormik({
        initialValues: {
            nopo: "",
            noref: "",
            vendorname: "",
            sku: "",
            qty: ""
        },
        validationSchema: Yup.object({
            nopo: Yup.string()
                .min(2, "Minimum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required"),
            noref: Yup.string()
                .min(2, "Minimux 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required"),
            vendorname: Yup.string()
                .min(2, "Minimum 2 characters")
                .required("Required"),
            sku: Yup.string()
                .min(2, "Minimum 2 characters")
                .required("Required"),
            qty: Yup.number()
                .min(1, "Minimux 2 characters")
                .required("Required"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <div style={{ paddingBottom: "10px" }}>
            <Breadcrumb style={{ fontSize: '0.75rem' }}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Barang Masuk</Breadcrumb.Item>
            </Breadcrumb>
            <Container style={{ marginTop: '1em' }}>

                <Card border="primary" style={{ width: '' }}>
                    <Card.Header as="h5">Input Barang Masuk</Card.Header>
                    <Form onSubmit={formik.handleSubmit}>
                        <Card.Body>
                            <Form.Row>
                                <FormGroup as={Col} md="4">
                                    <Form.Label for="No. PO">No. PO</Form.Label>
                                    <Form.Control size="sm" type="text" name="nopo" placeholder="No. PO" id="nopo" value={formik.values.nopo} onChange={formik.handleChange} />
                                    {formik.errors.nopo && formik.touched.nopo && (
                                        <p className="notifError">{formik.errors.nopo}</p>
                                    )}
                                </FormGroup>
                                <FormGroup as={Col} md="4">
                                    <Form.Label for="No. Reference">No. Reference</Form.Label>
                                    <Form.Control size="sm" type="text" name="noref" placeholder="No. Reference" id="noref" value={formik.values.noref} onChange={formik.handleChange} />
                                    {formik.errors.noref && formik.touched.noref && (
                                        <p className="notifError">{formik.errors.noref}</p>
                                    )}
                                </FormGroup>
                                <FormGroup as={Col} md="4">
                                    <Form.Label for="Vendor Name">Vendor Name</Form.Label>
                                    <Form.Control size="sm" type="text" name="vendorname" placeholder="Vendor Name" id="vendorname" value={formik.values.vendorname} onChange={formik.handleChange} />
                                    {formik.errors.vendorname && formik.touched.vendorname && (
                                        <p className="notifError">{formik.errors.vendorname}</p>
                                    )}
                                </FormGroup>
                            </Form.Row>

                            <Form.Row>
                                <FormGroup as={Col} md="4">
                                    <Form.Label for="SKU">SKU</Form.Label>
                                    <Form.Control size="sm" type="text" name="sku" placeholder="SKU" id="sku" value={formik.values.sku} onChange={formik.handleChange} />
                                    {formik.errors.sku && formik.touched.sku && (
                                        <p className="notifError">{formik.errors.sku}</p>
                                    )}
                                </FormGroup>

                                <FormGroup as={Col} md="4">
                                    <Form.Label for="Satuan">Satuan</Form.Label>
                                    <Form.Control size="sm" as="select" defaultValue="Choose...">
                                        <option>Choose</option>
                                        <option>.</option>
                                        <option>..</option>
                                    </Form.Control>
                                </FormGroup>
                                <FormGroup as={Col} md="4">
                                    <Form.Label for="Qty Number">Qty</Form.Label>
                                    <Form.Control size="sm" type="number" min="1" name="qty" placeholder="Qty" id="qty" value={formik.values.qty} onChange={formik.handleChange} />
                                    {formik.errors.qty && formik.touched.qty && (
                                        <p className="notifError">{formik.errors.qty}</p>
                                    )}
                                </FormGroup>
                            </Form.Row>

                            <FormGroup>
                                <Form.Label for="Product No">Product No</Form.Label>
                                <Form.Control size="sm" type="text" name="productno" placeholder="Product No" id="firstname" />
                            </FormGroup>
                            <FormGroup>
                                <Form.Label for="Description">Description</Form.Label>
                                <Form.Control size="sm" as="textarea" rows={3} name="deskripsi" />
                            </FormGroup>
                        </Card.Body>
                        <Card.Footer>
                            <FormGroup>
                                <Button variant="outline-primary" type="submit">Save</Button>{' '}
                                <Button variant="outline-danger">Cancel</Button>
                            </FormGroup>
                        </Card.Footer>
                    </Form>
                </Card>
            </Container>
        </div>
    )

}