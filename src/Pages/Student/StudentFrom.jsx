import { useState, useEffect } from "react";
import Api from "../../services/api";
import { CLASS_LIST,SECTION_LIST } from "../../constants/SchoolData";

const Student = () => {  

  const [formData, setFormData] = useState({
    name: "",
    class_id: "",
    section: "",
    parent_phone: "",
    parent_name: "",
    parent_email: "",
    address: "",
    gender: "",
    dob: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await Api.post("/student", formData);
      console.log("Student added:", res.data);

      setFormData({
        name: "",
        class_id: "",
        section: "",
        parent_phone: "",
        parent_name: "",
        parent_email: "",
        address: "",
        gender: "",
        dob: "",
      });

      // Refresh list
      fetchStudents();

      setFormErrors({});
    } catch (err) {
      setFormErrors(err.response?.data?.errors || {});
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };

  // Get all students (loading once)
  const fetchStudents = async () => {
    try {
      const res = await Api.get("/all-student");
      setStudents(res.data.data);
    } catch (err) {
      console.log("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Add New Student</h3>
          <span className="text-xs text-gray-500">Quick entry form</span>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Student Name"
              className="w-full border rounded-lg px-3 py-2"
            />
            <p className="text-xs text-rose-500">{formErrors.name}</p>
          </div>

          {/* Class */}
          <div>
            <label className="block font-medium mb-1">Class</label>
            <select
              name="class_id"
              value={formData.class_id}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select Class</option>
              {CLASS_LIST.map((cls,key) => (
                <option key={key} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>
            <p className="text-xs text-rose-500">{formErrors.class_id}</p>
          </div>

          {/* Section */}
          <div>
            <label className="block font-medium mb-1">Section</label>
            <select
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select Section</option>
              {SECTION_LIST.map((sect,key) => (
                <option key={key} value={sect}>
                  Section {sect}
                </option>
              ))}
            </select>
            <p className="text-xs text-rose-500">{formErrors.section}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1">Parent Phone</label>
            <input
              type="number"
              name="parent_phone"
              value={formData.parent_phone}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full border rounded-lg px-3 py-2"
            />
            <p className="text-xs text-rose-500">{formErrors.parent_phone}</p>
          </div>

          {/* Parent Name */}
          <div>
            <label className="block font-medium mb-1">Parent Name</label>
            <input
              name="parent_name"
              value={formData.parent_name}
              onChange={handleChange}
              placeholder="Parent Name"
              className="w-full border rounded-lg px-3 py-2"
            />
            <p className="text-xs text-rose-500">{formErrors.parent_name}</p>
          </div>

          {/* Parent Email */}
          <div>
            <label className="block font-medium mb-1">Parent Email</label>
            <input
              type="email"
              name="parent_email"
              value={formData.parent_email}
              onChange={handleChange}
              placeholder="parent@gmail.com"
              className="w-full border rounded-lg px-3 py-2"
            />
            <p className="text-xs text-rose-500">{formErrors.parent_email}</p>
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium mb-1">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border rounded-lg px-3 py-2"
            />
            <p className="text-xs text-rose-500">{formErrors.address}</p>
          </div>

          {/* Gender */}
          <div>
            <label className="block font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p className="text-xs text-rose-500">{formErrors.gender}</p>
          </div>

          {/* DOB */}
          <div>
            <label className="block font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
            <p className="text-xs text-rose-500">{formErrors.dob}</p>
          </div>

          {/* Submit */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg py-2"
            >
              {loading ? "Adding..." : "+ Add Student"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Student;
