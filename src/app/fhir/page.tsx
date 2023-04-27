export default function Page() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
                <a
                    href="/fhir/fhir-resource-analyser"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        FHIR Resource Analyser{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          ...
                        </span>
                    </h2>
                    <p
                        className={`m-0 max-w-[30ch] text-sm opacity-50`}
                    >
                        Find in-depth information about Next.js features and API.
                    </p>
                </a>
            </div>
        </main>
    )
}