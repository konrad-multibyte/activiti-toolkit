import { ArrowRightIcon } from "../icons"

export default function Page() {
    return (
        <main className="flex flex-col flex-grow items-center justify-between p-24">
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
                <Card href="/fhir/fhir-resource-analyser" title="FHIR Resource Analyser" text="Tool for viewing FHIR Resources." />
                
            </div>
        </main>
    )
}

function Card(
    {
        href,
        title,
        text
    }: {
        href: string
        title: string,
        text: string
    }
) {
    return (
        <a
            href={href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                {title}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <ArrowRightIcon width="32" height="32" alt="Arrow Right" />
                </span>
            </h2>
            <p
                className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
                {text}
            </p>
        </a>
    )
}