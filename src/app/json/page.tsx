import { ArrowRightIcon } from "../icons"

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <CardExternal href="https://jsonpathfinder.com/" title="JSON Path Finder" text="Web app to find the path of an item in a JSON object. Developed by Joe Beach." />
                <CardExternal
                    href="https://www.json.org/json-en.html"
                    title="JSON Specification"
                    text="(JavaScript Object Notation) is a lightweight data-interchange
                          format. It is easy for humans to read and write. It is easy for machines to
                          parse and generate."
                />
            </div>
        </main>
    )
}

function CardExternal({
    href,
    title,
    text
}: {
    href: string
    title: string
    text: string
}) {
    return (
        <a
            href={href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            target="_blank"
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