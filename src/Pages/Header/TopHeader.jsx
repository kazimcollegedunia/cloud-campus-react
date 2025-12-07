const SideBar = () => {
    return <>
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
            <h2 className="text-xl font-semibold">Students</h2>
            <div className="text-sm text-gray-500">
                Total Active Students: <span className="font-semibold text-blue-600">1,280</span>
            </div>
        </header>
    </>
}

export default SideBar;