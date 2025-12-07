import StudentTable from "./StudentTable"
import StudentFrom from "./StudentFrom"

const student = () => {    
    return <>   
        <section className="p-6 space-y-6">
            {/* <!-- TOP: ADD STUDENT FORM --> */}
            <StudentFrom/>
            {/* <!-- FILTERS + TABLE --> */}
            <StudentTable />
        </section>
    </>
}

export default student;