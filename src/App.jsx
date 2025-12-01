import Student from "./components/Student/StudentMain";
import axios from "axios";

const app = () => {
  // const getStudentData = async () => {
  // let studentDetails = await axios.get('http://cloud-campus-apis.test/api/v1/student');
  
  //   console.log(studentDetails.data.data);
  // }
  return <>
    {/* <button onClick={ getStudentData }>Get Student</button> */}
  <Student />
  <h1 className="text-white">Ya Allah. Ya Ali a.s Madad</h1></>
}

export default app;