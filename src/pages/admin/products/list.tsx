import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Button, Table } from 'antd';
import { Link } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

import { listProduct } from '../../../api/products';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
// import { useQuery } from 'react-query'
const { Paragraph } = Typography


interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Đặc điểm',
        dataIndex: 'feature',
        key: 'feature',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Giá khuyến mãi',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Mô tả',
        dataIndex: 'desc',
        key: 'desc',
    },
];



const ListProduct = () => {
    const [dataTable, setDataTable] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    const queryClient = new QueryClient();

    const fetchData =  async () => {
        const data = await listProduct()
        console.log(data)
        setDataTable(data.data)
    }

    // fetchData()
    useEffect(() => {        
    
    }, [])

    const {isLoading, data, error} = useQuery<any>(['Product'], listProduct)
    console.log(data);
    
    return (
        <>
        
            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Điện thoại
                </Typography.Title>
                <Link to="/admin/product/add">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
            </Breadcrumb>
            <Table loading={isLoading} columns={columns} dataSource={data?.data} />
           
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
export default ListProduct