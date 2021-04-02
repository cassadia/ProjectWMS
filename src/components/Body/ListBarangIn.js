import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import { Container, Breadcrumb, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'react-bootstrap-icons';

function ListBarangIn() {

    const products = [
        { id: 1, name: 'Gob', value: '2', createdAt: '2021-11-04' },
        { id: 2, name: 'Buster', value: '5', createdAt: '2021-10-04' },
        { id: 3, name: 'George Michael', value: '4', createdAt: '2021-09-04' },
        { id: 4, name: 'Michael', value: '3', createdAt: '2021-08-04' },
        { id: 5, name: 'George', value: '2', createdAt: '2021-07-04' },
        { id: 6, name: 'Johnny', value: '1', createdAt: '2021-06-04' },
        { id: 7, name: 'John Doe', value: '14', createdAt: '2021-05-04' },
        { id: 8, name: 'Doe', value: '44', createdAt: '2021-04-04' },
        { id: 9, name: 'Johnny Cage', value: '54', createdAt: '2021-03-04' },
        { id: 10, name: 'Cage', value: '74', createdAt: '2021-02-04' },
        { id: 11, name: 'Gob', value: '2', createdAt: '2021-01-04' },
        { id: 12, name: 'Buster', value: '5', createdAt: '2020-11-04' },
        { id: 13, name: 'George Michael', value: '4', createdAt: '2019-11-04' },
        { id: 14, name: 'Michael', value: '3', createdAt: '2018-11-04' },
        { id: 15, name: 'George', value: '2', createdAt: '2020-01-01' },
        { id: 16, name: 'Johnny', value: '1', createdAt: '2020-02-02' },
        { id: 17, name: 'John Doe', value: '14', createdAt: '2020-03-04' },
        { id: 18, name: 'Doe', value: '44', createdAt: '2020-05-05' },
        { id: 19, name: 'Johnny Cage', value: '54', createdAt: '2020-06-06' },
        { id: 20, name: 'Cage', value: '74', createdAt: '2020-07-07' }
    ];
    const columns = [{
        dataField: 'id',
        text: 'Product ID',
        // headerStyle: {
        //     backgroundColor: '#343A40',
        // }
    }, {
        dataField: 'name',
        text: 'Product Name',
        sort: true,
        // headerStyle: {
        //     backgroundColor: '#343A40'
        // }
    }, {
        dataField: 'value',
        text: 'Product value',
        // headerStyle: {
        //     backgroundColor: '#343A40'
        // }
    }, {
        dataField: 'createdAt',
        text: 'Created At',
        // headerStyle: {
        //     backgroundColor: '#343A40'
        // }
    }];
    const options = {
        page: 1,
        sizePerPage: 5,
        nextPageText: '>',
        prePageText: '<',
        showTotal: true
    }
    const { SearchBar, ClearSearchButton } = Search;
    const selectRow = {
        mode: 'radio',
        clickToSelect: true
    }

    const coba = {

    }

    return (
        <div style={{ paddingBottom: "10px" }}>
            <Breadcrumb style={{ fontSize: '0.75rem' }}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Goods Receive</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid>
            <p className="ml-auto"><Link to="/BarangIn"><Button variant="outline-primary" size="sm"><PlusCircle className="mb-1" /> Add</Button></Link></p>
                <Card border="primary">
                    <Card.Header as="h5">Goods Receive</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <ToolkitProvider keyField='id' data={products} columns={columns} search>
                                    {
                                        props => (
                                            <div>
                                                {/* <p className="ml-auto"><Link to="/BarangIn"><Button className="btn btn-outline-primary" size="sm">Add</Button></Link></p> */}
                                                <SearchBar {...props.searchProps} /> { ' '}
                                                {/* <ClearSearchButton className="btn-outline-secondary" {...props.searchProps} /> { ' '} */}
                                                <BootstrapTable bootstrap4 pagination={paginationFactory()} {...props.baseProps} headerClasses="header" bordered={false} />
                                            </div>
                                        )
                                    }
                                </ToolkitProvider>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )

}
export default ListBarangIn;