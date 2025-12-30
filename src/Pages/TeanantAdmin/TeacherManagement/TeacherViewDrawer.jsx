const TeacherViewDrawer = ({ teacher, teacherDetails }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={teacherDetails}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-xl flex flex-col">

        {/* Header */}
        <div className="px-5 py-4 border-b flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              Teacher Details
            </h3>
            <p className="text-xs text-gray-500">
              Profile & activity
            </p>
          </div>

          <button
            onClick={teacherDetails}
            className="text-gray-500 hover:text-black text-xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-6 overflow-y-auto">

          {/* Profile */}
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center text-lg font-semibold text-blue-700">
              {teacher?.name?.charAt(0)}
            </div>

            <div>
              <div className="font-medium text-base">
                {teacher?.name}
              </div>
              <div className="text-sm text-gray-500">
                {teacher?.email}
              </div>
            </div>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Phone</div>
              <div className="font-medium">
                {teacher?.phone}
              </div>
            </div>

            <div>
              <div className="text-gray-500">Status</div>
              <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                Active
              </span>
            </div>

            <div>
              <div className="text-gray-500">Joined On</div>
              <div className="font-medium">
                12 Apr 2024
              </div>
            </div>

            <div>
              <div className="text-gray-500">Role</div>
              <div className="font-medium">
                Teacher
              </div>
            </div>
          </div>

          {/* Assigned Classes */}
          <div>
            <h4 className="text-sm font-semibold mb-2">
              Assigned Classes
            </h4>

            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                Class 10 - A
              </span>
              <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                Class 9 - B
              </span>
            </div>
          </div>

          {/* Activity / History */}
          <div>
            <h4 className="text-sm font-semibold mb-2">
              Recent Activity
            </h4>

            <ul className="text-sm space-y-2">
              <li className="flex justify-between text-gray-600">
                <span>Assigned to Class 10-A</span>
                <span className="text-xs">2 days ago</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Status changed to Active</span>
                <span className="text-xs">1 week ago</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Profile created</span>
                <span className="text-xs">1 month ago</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t px-5 py-4 flex gap-2">
          <button className="flex-1 px-4 py-2 text-sm border rounded-lg">
            Edit
          </button>
          <button className="flex-1 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg">
            View Timetable
          </button>
        </div>

      </div>
    </>
  );
};

export default TeacherViewDrawer;
