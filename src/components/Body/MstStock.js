import React from 'react'
import { Card, Container, Table, Breadcrumb, Badge, Pagination } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import '../All.css'

function MstStock() {
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
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item active>Stock</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid>
                <Card border="primary">
                    <Card.Header as="h5">
                        Master Stock
                    </Card.Header>
                    <Card.Body>
                        <Table size="sm" className="ukuranFont" responsive>
                            <thead>
                                <tr>
                                    <th>SKU</th>
                                    <th>Kategori</th>
                                    <th>Product Number</th>
                                    <th>Serial Number</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th style={{ textAlign: 'center' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01B-002-0386</td>
                                    <td>IT</td>
                                    <td>1A484PA</td>
                                    <td>8cc0114434</td>
                                    <td>HP 200 G4 AIO [1A484PA]</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> { ' ' }
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01B-002-0351</td>
                                    <td>IT</td>
                                    <td>1A233PA</td>
                                    <td>8cc011443l</td>
                                    <td>HP 200 G4 AIO [1A233PA]</td>
                                    <td><Badge variant="secondary">Inactive</Badge></td>
                                    <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> { ' ' }
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01B-002-0386</td>
                                    <td>Non IT</td>
                                    <td>1A484PA</td>
                                    <td>8cc011443n</td>
                                    <td>HP 200 G4 AIO [1A484PA]</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> { ' ' }
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01B-002-0386</td>
                                    <td>IT</td>
                                    <td>1A484PA</td>
                                    <td>8cc0114434</td>
                                    <td>HP 200 G4 AIO [1A484PA]</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> { ' ' }
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01B-002-0351</td>
                                    <td>Non IT</td>
                                    <td>1A233PA</td>
                                    <td>8cc011443l</td>
                                    <td>HP 200 G4 AIO [1A233PA]</td>
                                    <td><Badge variant="secondary">Inactive</Badge></td>
                                    <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> { ' ' }
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01B-002-0386</td>
                                    <td>Non IT</td>
                                    <td>1A484PA</td>
                                    <td>8cc011443n</td>
                                    <td>HP 200 G4 AIO [1A484PA]</td>
                                    <td><Badge variant="danger">Discontinue</Badge></td>
                                    <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> { ' ' }
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01B-002-0386</td>
                                    <td>Non IT</td>
                                    <td>1A484PA</td>
                                    <td>8cc011443n</td>
                                    <td>HP 200 G4 AIO [1A484PA]</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> { ' ' }
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01B-002-0386</td>
                                    <td>IT</td>
                                    <td>1A484PA</td>
                                    <td>8cc0114434</td>
                                    <td>HP 200 G4 AIO [1A484PA]</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> { ' ' }
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01B-002-0351</td>
                                    <td>Non IT</td>
                                    <td>1A233PA</td>
                                    <td>8cc011443l</td>
                                    <td>HP 200 G4 AIO [1A233PA]</td>
                                    <td><Badge variant="secondary">Inactive</Badge></td>
                                    <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> { ' ' }
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01B-002-0386</td>
                                    <td>Non IT</td>
                                    <td>1A484PA</td>
                                    <td>8cc011443n</td>
                                    <td>HP 200 G4 AIO [1A484PA]</td>
                                    <td><Badge variant="danger">Discontinue</Badge></td>
                                    <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> { ' ' }
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td>
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
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default MstStock;