import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const table = () => {

    
        const [student,setStudent] = useState([]);
        const [schoolClass,setSchoolClass] = useState([]);
        const [schoolSection,setSchoolSection] = useState([]);
        const [filterData, setFilterData] = useState("");
        const [studentCount, setStudentCount] = useState(0);
    let filterString = "";
        useEffect(() => {
        getStudentData(); 
        getClass();
        getSection();
        }, []);

        const getStudentData = async (filter = {}) => {
            

            // Build URL filters safely
            if(filter.class){
                filterString += `class=${filter.class}`;
            }

            if(filter.section){
                filterString += `${filterString && '&'}section=${filter.section}`;
            }

            if(filter.search){
                filterString += `search=${filter.search}`;
                // console.log(filterString);
            }

            setFilterData(filterString); // update state

            // console.log("Generated Filter Query:", filterString);

            // API call
            const studentDetails = await axios.get(
                `http://cloud-campus-apis.test/api/v1/student/?${filterString}`
            );

            // console.log(studentDetails.data.data.studentCount); return 1;
            setStudentCount(studentDetails.data.data.studentCount);


            setStudent(studentDetails.data.data.studentData);
        };


    const getClass = async (filter=[{}]) => {
        let studentClass = await axios.get(`http://cloud-campus-apis.test/api/v1/all-class`);
        let studentClassObj = studentClass.data.data;
        setSchoolClass(studentClassObj);
    }

    const getSection = async (filter=[{}]) => {
        let studentDetails = await axios.get(`http://cloud-campus-apis.test/api/v1/all-section`);
        let studentDetailsObj = studentDetails.data.data;
        setSchoolSection(studentDetailsObj);
    }

    const searchStudent = (e) => {
        let searchValue = e.target.value;
        // searchValue = searchValue.trim()
        if(searchValue.length > 1){
            getStudentData({search:searchValue});
        }
    }

    getSection

    return <>
            <div className="bg-white rounded-2xl shadow-md p-5">
                {/* <!-- Filters --> */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex gap-3 text-sm">
                    <div className="w-full bg"><h1>{studentCount}</h1></div>
                    <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" onChange={(e) => {
                        let targetClass = {class:e.target.value};
                        getStudentData(targetClass)
                    }}>
                    <option value=" ">All Class</option>
                    { schoolClass.length > 0 ?
                        schoolClass.map((classData,idx) => {
                                return <option value={classData}>Class {classData}</option>
                        })  
                            : <option></option>}
                    </select>
                    <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                    onChange={(e) => {
                        let targetSection = {section:e.target.value};
                        getStudentData(targetSection)
                    }}
                    >
                    <option value=" ">All Sections</option>
                    { schoolSection.length > 0 ?
                        schoolSection.map((SectionData,idx) => {
                                return <option value={SectionData}>Section {SectionData}</option>
                        })  
                            : <option></option>}
                    </select>
                </div>

                <div className="flex gap-2">
                    <input
                    type="text"
                    placeholder="Search by name or roll no..."
                    className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-56"
                    onChange={(e) => {
                        searchStudent(e)
                    }}
                    />
                    <button
                    className="px-4 py-2 text-sm bg-gray-100 rounded-lg border hover:bg-gray-200"
                    >
                    Search
                    </button>
                </div>
                </div>

                {/* <!-- Table --> */}
                <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                    <tr className="bg-gray-50 text-left">
                        <th className="border-b py-3 px-3">#</th>
                        <th className="border-b py-3 px-3">Student Name</th>
                        <th className="border-b py-3 px-3">Class</th>
                        <th className="border-b py-3 px-3">Section</th>
                        <th className="border-b py-3 px-3">Roll No.</th>
                        <th className="border-b py-3 px-3">Parent Contact</th>
                        <th className="border-b py-3 px-3">Status</th>
                        <th className="border-b py-3 px-3 text-right">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {student.length > 0 ? (
                            student.map((el, index) => (
                                //  statusLabel = (el.status ? 'text-green-700' : 'text-red-700');
                                <tr key={el.id} className="hover:bg-gray-50">
                                    <td className="border-b py-2.5 px-3">{++index}</td>
                                    <td className="border-b py-2.5 px-3 font-medium">{el.name}</td>
                                    <td className="border-b py-2.5 px-3">{el.class}</td>
                                    <td className="border-b py-2.5 px-3">{el.section.toUpperCase()}</td>
                                    <td className="border-b py-2.5 px-3">{el.roll_no}</td>
                                    <td className="border-b py-2.5 px-3">{el.contact_no}</td>
                                    <td className="border-b py-2.5 px-3">
                                        <span className="px-2 py-1 text-xs rounded-full bg-green-100  text-green-700">
                                            {el.status ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="border-b py-2.5 px-3 text-right space-x-2">
                                        <button className="px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-700">Edit</button>
                                        <button className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-700">Delete</button>
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
        </>
}

export default table;