import Link from "next/link"

export function FhirTypeDef({
    type,
    className
} : {
    type: string,
    className?: string
}) {
    return (
        <Link className={`${className}`} href={`https://www.hl7.org/fhir/${type}.html`} target="_blank" rel="noopener noreferrer">{type} &lt;<span className="underline">{`https://www.hl7.org/fhir/${type}.html`}</span>&gt;</Link>
    )
}