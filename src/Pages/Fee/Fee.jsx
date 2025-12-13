import InvoiceTable from './InvoceTable';
import InvoceFilter from './InvoceFilter';
import InvoiceSummary from './InvoiceSummary';
import Api from '../../services/api';
import { useState,useEffect } from 'react';

const Fee = () => {

  const filterHandler = (e) => {
    e.preventDefault()
    alert(2345);
  }

  const [invoceTableDatas,setInvoceTableDatas] = useState({}); 
  const invoceTableData = async () => {
    try{
      const  invoceTableData = await Api.get('fee/invoices-list');
      setInvoceTableDatas(invoceTableData.data.data); 
    }catch(err){
        console.log("invoice List : ",err)
    }
  }
  useEffect(() => {
  invoceTableData()
  },[]);

    return <>
    <section className="p-6 space-y-6">

      {/* <!-- STATS ROW --> */}
      <InvoiceSummary />

      {/* <!-- FILTERS + NEW INVOICE --> */}
     <InvoceFilter />

      {/* <!-- INVOICES TABLE --> */}
      <InvoiceTable data={invoceTableDatas} />

    </section>
        </>
}

export default Fee;
