import React from 'react'
import EMTable from '../../controls/EMTable'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function CategoryList() {
  const navigate = useNavigate();
  const Category:[] =[]
  const tableColumn:any =[]
  
  return (
    <div>
    <h2>Category</h2>
    <Button onClick={() => navigate("/category")}> Add</Button>
    <EMTable data={Category} columns={tableColumn}/>
  </div>
  )
}
