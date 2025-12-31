import { useState } from "react";
import toast from "react-hot-toast";
import Api from "../../../services/api";

const TeacherFormModal = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    primary_subject: "",
    qualification: "",
    experience_years: "",
    joining_date: "",
    salary: "",
    gender: "",
    dob: "",
    address: "",
    emergency_contact: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // 🔹 SAME UI – only handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // field error clear while typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await Api.post(
        "teacher-management/teacher",
        formData
      );

      toast.success("Teacher created successfully");
      onSuccess?.();   // table refresh
      onClose();       // close modal

    } catch (err) {
      const res = err?.response?.data;

      if (res?.errors) {
        setErrors(res.errors);
        toast.error("Please fix the highlighted errors");
      } else {
        toast.error(res?.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  console.log("errors:",errors);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl rounded-2xl p-6 space-y-6 shadow-lg">

        {/* Header */}
        <div>
          <h3 className="text-lg font-semibold">Create Teacher</h3>
          <p className="text-sm text-gray-500">
            Enter teacher personal & professional details
          </p>
        </div>

        {/* Form – UI SAME */}
        <form className="space-y-6" onSubmit={formHandler}>

          {/* BASIC INFO */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Basic Information
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-lg px-3 py-2 w-full"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name[0]}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="border rounded-lg px-3 py-2 w-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email[0]}
                  </p>
                )}
              </div>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone"
                className="border rounded-lg px-3 py-2"
              />
             

              <input
                name="emergency_contact"
                value={formData.emergency_contact}
                onChange={handleChange}
                type="text"
                placeholder="Emergency Contact"
                className="border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          {/* PROFESSIONAL INFO */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Professional Information
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                type="text"
                placeholder="Designation (e.g. Math Teacher)"
                className="border rounded-lg px-3 py-2"
              />

              <select
                name="primary_subject"
                value={formData.primary_subject}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2"
              >
                <option value="">Primary Subject</option>
                <option value="1">Math</option>
                <option value="2">Science</option>
                <option value="3">English</option>
              </select>

              <input
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                type="text"
                placeholder="Qualification (e.g. M.Sc Math)"
                className="border rounded-lg px-3 py-2"
              />

              <input
                name="experience_years"
                value={formData.experience_years}
                onChange={handleChange}
                type="number"
                placeholder="Experience (Years)"
                className="border rounded-lg px-3 py-2"
              />

              <input
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                type="number"
                placeholder="Salary"
                className="border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          {/* PERSONAL INFO */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Personal Information
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <input
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                type="date"
                className="border rounded-lg px-3 py-2"
              />

              <input
                name="joining_date"
                value={formData.joining_date}
                onChange={handleChange}
                type="date"
                className="border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Address
            </h4>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              placeholder="Full Address"
              className="border rounded-lg px-3 py-2 w-full resize-none"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {loading ? "Saving..." : "Save Teacher"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default TeacherFormModal;
