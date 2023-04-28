export default function Page() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <a
                    href="https://jsonpathfinder.com/"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        JSON Path Finder{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 8">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </span>
                    </h2>
                    <p
                        className={`m-0 max-w-[30ch] text-sm opacity-50`}
                    >
                        Web app to find the path of an item in a JSON object. Developed by Joe Beach.
                    </p>
                </a>
                <a
                    href="https://www.json.org/json-en.html"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        JSON Specification{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 8">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </span>
                    </h2>
                    <p
                        className={`m-0 max-w-[30ch] text-sm opacity-50`}
                    >
                        (JavaScript Object Notation) is a lightweight data-interchange
                        format. It is easy for humans to read and write. It is easy for machines to
                        parse and generate.
                    </p>
                </a>
            </div>
        </main>
    )
}