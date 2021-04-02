import React from 'react'
import { Card, Container, Breadcrumb, Form, FormGroup, Col, Row, InputGroup, FormControl, Button, Table, Badge, Pagination, items } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { PlusCircle, Search } from 'react-bootstrap-icons';

function AdmListUser() {

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        )
    }

    return (
        <div style={{ paddingBottom: '10px' }}>
            <Breadcrumb style={{ fontSize: '0.75rem' }}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Admin</Breadcrumb.Item>
                <Breadcrumb.Item active>List User</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid>
            <p className="ml-auto"><Link to="/BarangIn"><Button variant="outline-primary" size="sm"><PlusCircle className="mb-1" /> Add</Button></Link></p>
                <Card border="primary">
                    <Card.Header as="h5">List User</Card.Header>
                    <Card.Body>
                        <form>
                            <Row>
                                <Col xs="12" lg="4">
                                    <Table size="sm" className="ukuranFont" responsive>
                                        <tr>
                                            <td>Search By</td>
                                            <td>:</td>
                                            <td><Form.Control type="text" size="sm" placeholder="UserID"></Form.Control></td>
                                            <td><Button variant="outline-primary" type="submit" size="sm" block><Search className="mb-1" /> Search</Button></td>
                                        </tr>
                                    </Table>
                                </Col>
                            </Row>

                            <Table size="sm" style={{ fontSize: '0.875rem' }} responsive>
                                <thead>
                                    <tr>
                                        <th>UserID</th>
                                        <th>Username</th>
                                        <th>Created By</th>
                                        <th>Created Date</th>
                                        <th>Updated By</th>
                                        <th>Updated Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>admingudang</td>
                                        <td>Admin Gudang - Nani</td>
                                        <td>IT</td>
                                        <td>2021-03-03 11:59:59</td>
                                        <td>Admin</td>
                                        <td>2021-04-02 23:59:59</td>
                                        <td><Badge variant="success">Active</Badge></td>
                                        <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                    </tr>
                                    <tr>
                                        <td>checker</td>
                                        <td>Checker</td>
                                        <td>IT</td>
                                        <td>2021-03-03 11:59:59</td>
                                        <td>Admin</td>
                                        <td>2021-04-02 23:59:59</td>
                                        <td><Badge variant="secondary">Inactive</Badge></td>
                                        <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                    </tr>
                                    <tr>
                                        <td>admingudang1</td>
                                        <td>Admin Gudang - Nuni</td>
                                        <td>IT</td>
                                        <td>2021-03-03 10:59:59</td>
                                        <td>Admin</td>
                                        <td>2021-04-02 23:59:59</td>
                                        <td><Badge variant="success">Active</Badge></td>
                                        <td><button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button></td>
                                    </tr>
                                    <tr>
                                        <td>spvgudang</td>
                                        <td>SPV Gudang - Noni</td>
                                        <td>IT</td>
                                        <td>2021-03-03 09:59:59</td>
                                        <td>Admin</td>
                                        <td>2021-04-02 23:59:59</td>
                                        <td><Badge variant="success">Active</Badge></td>
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

export default AdmListUser
