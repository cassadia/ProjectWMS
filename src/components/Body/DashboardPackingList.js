import React from 'react'
import { Container, Card, Breadcrumb, Table, Badge, Pagination } from 'react-bootstrap'

function DashboardPackingList() {
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
        <div style={{ paddingBottom: "10px" }}>
            <Breadcrumb style={{ fontSize: '0.75rem' }}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Dashboard Packing List</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid>
                <Card border="primary">
                    <Card.Header as="h5">Dashboard Packing List</Card.Header>
                    <Card.Body>
                        <Table size="sm" className="ukuranFont" responsive>
                            <thead>
                                <tr>
                                    <th>SalesOrder</th>
                                    <th>DeliveryOrder</th>
                                    <th>DeliveryOrder Date</th>
                                    <th>Address</th>
                                    <th>Note</th>
                                    <th>Status</th>
                                    {/* <th style={{ textAlign: 'center' }}>Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SO-AMP-2011-00226</td>
                                    <td>PSS-AMP-2011-00800</td>
                                    <td>2021-03-04 23:59:59</td>
                                    <td>JL. KUNINGAN BARAT NO. 8, JAKARTA SELATAN CYBER BUILDING 6TH FLOOR</td>
                                    <td>Tunggu informasi sales</td>
                                    <td><Badge variant="success">Ready</Badge></td>
                                    {/* <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> {' '}
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td> */}
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00230</td>
                                    <td>PSS-AMP-2011-00801</td>
                                    <td>2021-03-04 23:59:59</td>
                                    <td>JL RAYA PLUMPANG SEMPER NO.6 RT.009 RW.001 TUGU SELATAN,KOJA JAKARTA UTARA</td>
                                    <td>Tukar Unit</td>
                                    <td><Badge variant="secondary">Not Ready</Badge></td>
                                    {/* <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> {' '}
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td> */}
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00235</td>
                                    <td>PSS-AMP-2011-00830</td>
                                    <td>2021-11-04 23:59:59</td>
                                    <td>Gedung Wisma BSG Lantai 8, Jl. Abdul Muis No. No.40, Jakarta Pusat</td>
                                    <td>Tunggu informasi sales</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    {/* <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> {' '}
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td> */}
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00240</td>
                                    <td>PSS-AMP-2011-00864</td>
                                    <td>2021-11-04 23:59:59</td>
                                    <td>JL. KH. HAJI SAHDAN NO. 12 A KEMANGGISAN</td>
                                    <td>Tunggu informasi sales</td>
                                    <td><Badge variant="success">Ready</Badge></td>
                                    {/* <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> {' '}
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td> */}
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00245</td>
                                    <td>PSS-AMP-2011-00817</td>
                                    <td>2021-03-04 23:59:59</td>
                                    <td>RUKO SEDAYU SQUARE BLOK J NO. 06 LT.4 JL. LINGKAR LUAR CENGKARENG - JAKARTA BARAT</td>
                                    <td>Tukar Unit</td>
                                    <td><Badge variant="secondary">Not Ready</Badge></td>
                                    {/* <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> {' '}
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td> */}
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00250</td>
                                    <td>PSS-AMP-2011-00888</td>
                                    <td>2021-11-04 23:59:59</td>
                                    <td>GEDUNG MIGAS LT 7 JL HR RASUNA SAID KAV B-5 JAKARTA SELATAN  UP JEFFRY 0811899801 </td>
                                    <td>Tunggu informasi sales</td>
                                    <td><Badge variant="secondary">Not Ready</Badge></td>
                                    {/* <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> {' '}
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td> */}
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00406</td>
                                    <td>PSS-AMP-2011-00928</td>
                                    <td>2021-11-04 23:59:59</td>
                                    <td>Jl. Raya Pandeglang KM.03 Karundang Cipopok Jaya Kota Serang Banten</td>
                                    <td>Tunggu informasi sales</td>
                                    <td><Badge variant="success">Ready</Badge></td>
                                    {/* <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> {' '}
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td> */}
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00408</td>
                                    <td>PSS-AMP-2011-00930</td>
                                    <td>2021-11-04 23:59:59</td>
                                    <td>JL. KH. ZAINUL ARIFIN NO. 2 KOMP. KETAPANG INDAH KRUKUT JAKARTA BARAT 11140</td>
                                    <td>Tunggu informasi sales</td>
                                    <td><Badge variant="success">Active</Badge></td>
                                    {/* <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> {' '}
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td> */}
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00410</td>
                                    <td>PSS-AMP-2011-00950</td>
                                    <td>2021-03-04 23:59:59</td>
                                    <td>JL. RAWASARI SELATAN NO.1 KEC. CEMPAKA PUTIH KEL. CEMPAKA PUTIH TIMUR</td>
                                    <td>Tukar Unit</td>
                                    <td><Badge variant="secondary">Not Ready</Badge></td>
                                    {/* <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> {' '}
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td> */}
                                </tr>
                                <tr>
                                    <td>SO-AMP-2011-00444</td>
                                    <td>PSS-AMP-2011-00999</td>
                                    <td>2021-11-04 23:59:59</td>
                                    <td>Jl. Raya Pandeglang KM.03 Karundang Cipopok Jaya Kota Serang Banten</td>
                                    <td>Tunggu informasi sales</td>
                                    <td><Badge variant="secondary">Not Ready</Badge></td>
                                    {/* <td align="center">
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>Edit</button> {' '}
                                        <button className="btn btn-outline-primary" size="sm" style={{ fontSize: '0.8rem' }}>View</button>
                                    </td> */}
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

export default DashboardPackingList
