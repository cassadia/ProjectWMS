import React from 'react'
import { Card, Container, Breadcrumb, Form, FormGroup, Col, Row, InputGroup, FormControl, Button, Table, Badge, Pagination, items } from 'react-bootstrap'

function AdmSettings() {
    return (
        <div style={{ paddingBottom: '10px' }}>
            <Breadcrumb style={{ fontSize: '0.75rem' }}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Goods Out</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid>
                <Card border="primary">
                    <Card.Header as="h5">Settings</Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default AdmSettings
