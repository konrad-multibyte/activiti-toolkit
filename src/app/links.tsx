import Link from "next/link"

export function FhirTypeDef({
    type,
    className
}: {
    type: string,
    className?: string
}) {
    return (
        <Link className={`${className}`} href={`https://www.hl7.org/fhir/${type}.html`} target="_blank" rel="noopener noreferrer"><span className="underline">{`https://www.hl7.org/fhir/${type}.html`}</span></Link>
    )
}

export function LinkExternal(
    {
        className,
        href,
        text
    }: {
        className?: string
        href: string
        text: string
    }
) {
    return (
        <Link className={className} href={href} target="_blank" rel="noopener noreferrer">
            {text}
        </Link>
    )
}