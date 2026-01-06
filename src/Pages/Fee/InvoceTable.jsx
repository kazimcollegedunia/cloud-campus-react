import {useState,useEffect} from 'react';
import Api from "../../services/api";
import MarkPaidModal from "../Fee/MarkPaidModal";
import { CLASS_LIST, SECTION_LIST,SECTION_YEAR_MONTHS } from "../../constants/SchoolData";
import ActionButton from "../../components/ActionButton"
import toast from 'react-hot-toast';

const InvoiceTable = ({data,feeTypes,refreshTable}) => {

  const [showPaidModal, setShowPaidModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

    const handleMarkAsPaid = (invoice) => {
      console.log("invoice",invoice);
      setSelectedInvoice(invoice); // only this row
      setShowPaidModal(true);
  };

    const tableData = data;
    // const feeTypes = feeTypes;
    const getStatusClass = (status) => {
      switch (status) {
        case 'Pending':
          return 'bg-amber-100 text-amber-700';
        case 'Overdue':
          return 'bg-rose-100 text-rose-700';
        case 'Paid':
          return 'bg-green-100 text-green-700';
        case 'paid':
          return 'bg-green-100 text-green-700';
        default:
          return 'bg-gray-100 text-gray-700';
      }
    };

    const BUTTON_CONFIG = {
      second: {
        "Mark as paid": {
          className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
          action: "markPaid",
        },
        Receipt: {
          className: "bg-blue-100 text-blue-700 hover:bg-blue-200",
          action: "markPaid",
        },
      },
      first: {
        "Send Notice": {
          className: "bg-orange-100 text-orange-700 hover:bg-orange-200",
          action: "wip",
        },
        Reminder: {
          className: "bg-gray-100 text-gray-700 hover:bg-gray-200",
          action: "wip",
        },
        View: {
          className: "bg-gray-100 text-gray-700 hover:bg-gray-200",
          action: "wip",
        },
      },
    };

    const buttonHandler = (label, list = null, buttonPlace = "second") => {
      const config = BUTTON_CONFIG[buttonPlace]?.[label];

      if (!config) return null;

      const actionMap = {
        markPaid: () => handleMarkAsPaid(list),
        wip: () => toast.success("! Work in progress..."),
      };

      return (
        <ActionButton
          label={label}
          className={config.className}
          onClick={actionMap[config.action]}
        />
      );
    };
    // console.log(tableData);
    return <>
        <div className="bg-white rounded-2xl shadow-md p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Fee Invoices</h3>
          <button
            className="px-4 py-2 text-sm bg-gray-100 rounded-lg border hover:bg-gray-200">
            Export CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="border-b py-3 px-3">Invoice #</th>
                <th className="border-b py-3 px-3">Student</th>
                <th className="border-b py-3 px-3">Class</th>
                <th className="border-b py-3 px-3">Month</th>
                <th className="border-b py-3 px-3">Fee Type</th>
                <th className="border-b py-3 px-3">Amount</th>
                <th className="border-b py-3 px-3">Due Date</th>
                <th className="border-b py-3 px-3">Status</th>
                <th className="border-b py-3 px-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              
              {tableData.length > 0 ? (
                tableData.map((list, index) => (
                  <tr key={list.user_id} className="hover:bg-gray-50">
                    <td className="border-b py-2.5 px-3 font-mono text-xs">{list.receipt_no?`...${list.receipt_no.slice(-6)}`:'N/A'} </td>
                    <td className="border-b py-2.5 px-3 font-medium">{list.student_name}</td>
                    <td className="border-b py-2.5 px-3">{list.class_id} {list.section}</td>
                    <td className="border-b py-2.5 px-3">{list.due_date}</td>
                    
                    <td className="border-b py-2.5 px-3 font-semibold" 
                      title={list.fee_type_name??"Please Select Fee Type form filters"}>
                       {list.fee_type_name??'NA'}
                    </td>

                    <td className="border-b py-2.5 px-3 font-semibold">₹ {list.fee_type_amount??'NA'}</td>
                    <td className="border-b py-2.5 px-3">1st - {list.due_date}</td>
                    <td className="border-b py-2.5 px-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusClass(list.status)} text-amber-700`}>
                        {list.status}
                      </span>
                    </td>
                      <td className="border-b py-2.5 px-3 text-right space-x-2">
                        {buttonHandler(list?.action?.first_btn,null,'first')}
                  {/* <button className="px-3 py-1 text-xs rounded-md bg-gray-100 hover:bg-gray-200" value={list.action[0]}>
                    {list.action[0]}
                  </button> */}
                  {buttonHandler(list?.action?.second_btn,list)}
                  {/* <button className={buttonHundler(list.action[1],'btn-class')}>
                    {buttonHundler(list.action[1],'btn-name')}
                  </button> */}
                  {/* <button
                      onClick={() => handleMarkAsPaid(list)}
                      className="px-3 py-1 text-xs rounded-md bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                    >
                      Mark as Paids
                    </button> */}
                  {/* <button className="px-3 py-1 text-xs rounded-md bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                    {list.action[1]}
                  </button> */}
                </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-3">
                    Not Found...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
{
 showPaidModal &&     <MarkPaidModal
        isOpen={showPaidModal}
        invoice={selectedInvoice}
        onClose={() => {
          setShowPaidModal(false);
          setSelectedInvoice(null);
          refreshTable();
        }}
        feeTypes={feeTypes}
      />}

    </>
}

export default InvoiceTable;