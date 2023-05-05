export default function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-screen-xl flex flex-wrap items-center justify-between p-4 rounded-lg shadow dark:bg-gray-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">activiti.konradapp.dev</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/fhir" className="mr-4 hover:underline md:mr-6 ">FHIR</a>
                    </li>
                    <li>
                        <a href="/json" className="mr-4 hover:underline md:mr-6">JSON</a>
                    </li>
                    <li>
                        <a href="/" className="hover:underline">Home</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}