import StudentTable from "./StudentTable"
import StudentFrom from "./StudentFrom"
import { CLASS_LIST,SECTION_LIST } from "../../constants/SchoolData";

const student = () => {    
    return <>   
        <section className="p-6 space-y-6">
            {/* <!-- TOP: ADD STUDENT FORM --> */}
            <StudentFrom/>
            {/* <!-- FILTERS + TABLE --> */}
            <StudentTable  classes={CLASS_LIST}/>
        </section>
    </>
}

export default student;