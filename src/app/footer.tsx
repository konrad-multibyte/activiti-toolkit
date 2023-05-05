export default function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-screen-xl flex flex-wrap items-center justify-between p-4 rounded-lg shadow dark:bg-gray-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    <a href="/" className="hover:underline">Activiti Toolkit</a>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/license" className="mr-4 md:mr-6 hover:underline">License</a>
                    </li>
                    <li>
                        <a href="/" className="hover:underline">Home</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}