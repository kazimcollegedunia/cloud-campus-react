import InvoiceTable from './InvoceTable';
import InvoceFilter from './InvoceFilter';
import InvoiceSummary from './InvoiceSummary';
import Api from '../../services/api';
import { useState, useEffect } from 'react';

const Fee = () => {

  const [filters, setFilters] = useState({});
  const [feeTypes, setFeeTypes] = useState({});
  const [invoiceTableData, setInvoiceTableData] = useState([]);

  // API CALL WITH FILTERS
  const fetchInvoices = async (extraFilters = {}) => {
    try {
      const finalFilters = { ...filters, ...extraFilters };
      setFilters(finalFilters);

      const response = await Api.get("fee/invoices-list", {
        params: finalFilters,
      });

      setInvoiceTableData(response.data.data);

    } catch (err) {
      console.log("Invoice List Error: ", err);
    }
  };

  // FIRST TIME LOAD
  useEffect(() => {
    // fetchInvoices();
    fetchFeeType()
  }, []);

  // fee/types apis

  const fetchFeeType = async (extraFilters = {}) => {
    try {
      const finalFilters = { ...filters, ...extraFilters };
      setFilters(finalFilters);

      const response = await Api.get("fee/types", {
        params: finalFilters,
      });

      setFeeTypes(response.data.data);

    } catch (err) {
      console.log("Invoice List Error: ", err);
    }
  };

  return (
    <section className="p-6 space-y-6">

      <InvoiceSummary />

      {/* Pass handler to filter */}
      <InvoceFilter onApply={(f) => fetchInvoices(f)} feeTypes={feeTypes} />

      <InvoiceTable data={invoiceTableData} />

    </section>
  );
};

export default Fee;
