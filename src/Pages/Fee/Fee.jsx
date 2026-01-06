import InvoiceTable from './InvoceTable';
import InvoceFilter from './InvoceFilter';
import InvoiceSummary from './InvoiceSummary';
import Api from '../../services/api';
import { useState, useEffect } from 'react';
import toast from "react-hot-toast";

const Fee = () => {

  const [filters, setFilters] = useState({});
  const [feeTypes, setFeeTypes] = useState([]);
  const [invoiceTableData, setInvoiceTableData] = useState([]);
  const [filterError, setFilterError] = useState({});
  

  // API CALL WITH FILTERS
  const fetchInvoices = async (extraFilters = {}) => {
    const finalFilters = { ...filters, ...extraFilters };
    setFilters(finalFilters);

    // ✅ VALIDATION FIRST
    if (!finalFilters.feeType) {
      setFilterError({ feeType: "Please select Fee Type" });

      toast.error("Fee Type is required to fetch invoices");
      return; // 🔥 STOP API CALL
    }

    // clear error if valid
    setFilterError({});

    try {
      const response = await Api.get("fee/invoices-list", {
        params: finalFilters,
      });

      setInvoiceTableData(response.data.data);

      // toast.success("Invoices loaded successfully");

    } catch (err) {
      console.log("Invoice List Error: ", err);

      toast.error(
        err?.response?.data?.message || "Failed to fetch invoices"
      );
    }
  }

  // FIRST TIME LOAD
  useEffect(() => {
    // fetchInvoices();
    fetchFeeType()
  }, []);


  const fetchFeeType = async (classId) => {
    try {
      if (!classId) return;

      const response = await Api.get("fee/types", {
        params: { class_id: classId },
      });

      setFeeTypes(response.data.data);

    } catch (err) {
      console.log("Fee Type Error:", err);
    }
  };

  return (
    <section className="p-6 space-y-6">

      <InvoiceSummary />

      {/* Pass handler to filter */}
      <InvoceFilter
        onApply={(f) => fetchInvoices(f)}
        onClassChange={(classId) => fetchFeeType(classId)}
        feeTypes={feeTypes}
        filterError={filterError}
      />
      <InvoiceTable data={invoiceTableData} feeTypes={feeTypes} refreshTable={() =>fetchInvoices()}/>

    </section>
  );
};

export default Fee;
