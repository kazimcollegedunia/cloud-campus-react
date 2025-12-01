import { useEffect, useState } from "react";
import axios from "axios";

export const useStudent = () => {

    const [students, setStudents] = useState([]);
    const [classList, setClassList] = useState([]);
    const [sectionList, setSectionList] = useState([]);
    const [filters, setFilters] = useState({
        class: "",
        section: "",
        search: ""
    });

    const [count, setCount] = useState(0);

    // Fetch Students
    const getStudents = async () => {
        let response = await axios.get("http://cloud-campus-apis.test/api/v1/student", {
            params: filters
        });

        setStudents(response.data.data.studentData);
        setCount(response.data.data.studentCount);
    };

    // Fetch All Class
    const getClassList = async () => {
        let res = await axios.get("http://cloud-campus-apis.test/api/v1/all-class");
        setClassList(res.data.data);
    };

    // Fetch All Sections
    const getSectionList = async () => {
        let res = await axios.get("http://cloud-campus-apis.test/api/v1/all-section");
        setSectionList(res.data.data);
    };

    // Run Automatically
    useEffect(() => {
        getClassList();
        getSectionList();
        getStudents();
    }, [filters]);

    return {
        students,
        count,
        classList,
        sectionList,
        filters,
        setFilters
    };
};
