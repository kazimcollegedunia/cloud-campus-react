import Api from "../../services/api";
import {useState,useEffect} from 'react';
import { CLASS_LIST, SECTION_LIST,SECTION_YEAR_MONTHS } from "../../constants/SchoolData";
import toast from "react-hot-toast";
const MarkPaidModal = ({ isOpen, invoice, onClose, feeTypes }) => {
    // console.log(invoice.fee_type_id); 

  const [formData, setFormData] = useState({
    student_id: "",
    fee_type_id: "",
    paid_amount: "",
  });

  // when modal opens, prefill student_id & amount
  useEffect(() => {
    if (invoice) {
      setFormData({
        student_id: invoice.student_id,
        fee_type_id: invoice.fee_type_id || "", 
        paid_amount: invoice.fee_type_amount || "",
      });
    }
  }, [invoice]);

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      let res =  await Api.post("fee", formData);
      toast.success("Fees Paid Successfully");
      // success → close modal
      onClose();

    } catch (err) {
        toast.error("Mark Paid Error:", err.response?.data);
      console.log("Mark Paid Error:", err.response?.data);
    }
  };

  if (!isOpen || !invoice) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">

        <h3 className="text-lg font-semibold mb-4">
          Mark Invoice as Paid
        </h3>

        {/* STUDENT INFO */}
        <h2 className="mb-2 text-lg font-medium">Student Details:</h2>
        <ul className="space-y-1 text-sm">
          <li>
            Student Name:
            <span className="text-rose-500 ml-1">
              {invoice.student_name}
            </span>
          </li>
          <li>
            Class & Section:
            <span className="text-rose-500 ml-1">
              {invoice.class_id} ({invoice.section})
            </span>
          </li>
        </ul>

        <form onSubmit={submitHandler} className="mt-4">

          <div className="mb-3">
              <label className="block font-medium mb-1">Month</label>
              <select
                  name="month"
                  onChange={changeHandler}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                  <option value="">Select Month</option>
                  {SECTION_YEAR_MONTHS.map((item) => (
                      <option key={item.value} value={item.value}>
                      {item.label}
                      </option>
                  ))}
                  </select>
          </div>

          {/* FEE TYPE */}
          <div className="mb-3">
            <label className="block font-medium mb-1">Fee Type</label>
            <select
                name="fee_type_id"
                value={formData.fee_type_id}
                onChange={changeHandler}
                required
                className="w-full border rounded-lg px-3 py-2"
                >
                <option value="">Select Fee Type</option>
                {feeTypes.map((list) => (
                    <option key={list.id} value={list.id}>
                    {list.name}
                    </option>
                ))}
                </select>
          </div>

          {/* PAID AMOUNT */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Paid Amount</label>
            <input
              type="number"
              name="paid_amount"
              value={formData.paid_amount}
              onChange={changeHandler}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Confirm Paid
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default MarkPaidModal;