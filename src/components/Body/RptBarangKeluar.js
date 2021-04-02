import React from 'react'
import { Card, Container, Breadcrumb, Form, FormGroup, Col, Row, InputGroup, FormControl, Button, Table, Badge, Pagination, items } from 'react-bootstrap'
import '../All.css'
import { PlusCircle, Search } from 'react-bootstrap-icons';

function RptBarangKeluar() {
    let active = 1;
    let items = [];
    for(let number=1; number<=5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        )
    }

    return (
        <div style={{ paddingBottom: "10px" }}>
            <Breadcrumb style={{ fontSize: '0.75rem' }}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Reports</Breadcrumb.Item>
                <Breadcrumb.Item active>Report Barang Keluar</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid>
                <Card border="primary">
                    <Card.Header as="h5">Report Barang Keluar</Card.Header>
                    <Card.Body>
                        <form>
                            <Row>
                                <Col xs="12" lg="6">
                                    <Table size="sm" className="ukuranFont" responsive>
                                        <tr>
                                            <td>Categories</td>
                                            <td>:</td>
                                            <td colSpan="2">
                                                <Form.Control as="select" size="sm" custom>
                                                    <option>IT</option>
                                                    <option>Non IT</option>
                                                </Form.Control>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Search By</td>
                                            <td>:</td>
                                            <td>
                                                <Form.Control as="select" size="sm" custom>
                                                    <option>No PO</option>
                                                    <option>No Reference</option>
                                                    <option>Vendor Name</option>
                                                </Form.Control>
                                            </td>
                                            <td><Form.Control type="text" size="sm"></Form.Control></td>
                                        </tr>
                                        <tr>
                                            <td>Start Date</td>
                                            <td>:</td>
                                            <td><Form.Control type="date" size="sm"></Form.Control></td>
                                            <td><Form.Control type="date" size="sm"></Form.Control></td>
                                            <td><Button variant="outline-primary" type="submit" size="sm" block><Search className="mb-1" /> Search</Button></td>
                                            <td><Button variant="outline-primary" type="submit" size="sm" block>Export</Button></td>
                                        </tr>
                                    </Table>
                                </Col>
                            </Row>
                        
                        <Table size="sm" style={{ fontSize: '0.875rem' }} responsive>
                            <thead>
                                <tr>
                                    <th>No SO</th>
                                    <th>External Doc</th>
                                    <th>No DO</th>
                                    <th>Date Out</th>
                                    <th>Admin DO</th>
                                    <th>Created Date</th>
                                    <th>Created By</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SO-AMP-2011-00365</td>
                                    <td>PO/ATG/20111390</td>
                                    <td>DO.2020.11.00137</td>
                                    <td>2021-03-03 11:59:59</td>
                                    <td>PT. AIRMAS TEKNOLOGI GROSIRIA</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00367</td>
                                    <td>PO/ATG/20111395</td>
                                    <td>DO.2020.11.00138</td>
                                    <td>2021-03-03 11:59:59</td>
                                    <td>PT. AIRMAS TEKNOLOGI GROSIRIA</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="secondary">Inactive</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00369</td>
                                    <td>PO/ATG/20111394</td>
                                    <td>PSS-AMP-2011-00728</td>
                                    <td>2021-03-03 10:59:59</td>
                                    <td>PT. AIRMAS TEKNOLOGI GROSIRIA</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00368</td>
                                    <td>PO/ATG/20111396</td>
                                    <td>DO.2020.11.00140</td>
                                    <td>2021-03-03 09:59:59</td>
                                    <td>PT. AIRMAS TEKNOLOGI GROSIRIA</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00037</td>
                                    <td>PKM-OFFLINE-0479</td>
                                    <td>PSS-AMP-2011-00724</td>
                                    <td>2021-03-03 09:59:59</td>
                                    <td>PT. AMTEK SOLUSINDO</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="secondary">Inactive</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00249</td>
                                    <td>CRP-FIT-2011-0004</td>
                                    <td>PSS-AMP-2011-00729</td>
                                    <td>2021-03-03 08:59:59</td>
                                    <td>BPJS KESEHATAN CABANG JAKARTA UTARA</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="danger">Discontinue</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00365</td>
                                    <td>PO/ATG/20111390</td>
                                    <td>DO.2020.11.00137</td>
                                    <td>2021-03-03 11:59:59</td>
                                    <td>PT. AIRMAS TEKNOLOGI GROSIRIA</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00367</td>
                                    <td>PO/ATG/20111395</td>
                                    <td>DO.2020.11.00138</td>
                                    <td>2021-03-03 11:59:59</td>
                                    <td>PT. AIRMAS TEKNOLOGI GROSIRIA</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="secondary">Inactive</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00369</td>
                                    <td>PO/ATG/20111394</td>
                                    <td>PSS-AMP-2011-00728</td>
                                    <td>2021-03-03 10:59:59</td>
                                    <td>PT. AIRMAS TEKNOLOGI GROSIRIA</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00368</td>
                                    <td>PO/ATG/20111396</td>
                                    <td>DO.2020.11.00140</td>
                                    <td>2021-03-03 09:59:59</td>
                                    <td>PT. AIRMAS TEKNOLOGI GROSIRIA</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00037</td>
                                    <td>PKM-OFFLINE-0479</td>
                                    <td>PSS-AMP-2011-00724</td>
                                    <td>2021-03-03 09:59:59</td>
                                    <td>PT. AMTEK SOLUSINDO</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="secondary">Inactive</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00249</td>
                                    <td>CRP-FIT-2011-0004</td>
                                    <td>PSS-AMP-2011-00729</td>
                                    <td>2021-03-03 08:59:59</td>
                                    <td>BPJS KESEHATAN CABANG JAKARTA UTARA</td>
                                    <td>2021-04-02 23:59:59</td>
                                    <td>Admin</td>
                                    <td><Badge variant="danger">Discontinue</Badge></td>
                                    <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                </tr>
                            </tbody>
                        </Table>
                        <Pagination size="sm">
                            <Pagination.First />
                            <Pagination.Prev />
                            {items}
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>                        
                        </form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default RptBarangKeluar
