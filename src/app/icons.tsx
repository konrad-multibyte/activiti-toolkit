export function ActivitiIcon(
    {
        className,
        alt,
        width,
        height
    }: {
        className?: string,
        alt: string
        width: string,
        height: string
    }
) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 215 215">
            <title>{alt}</title>
            <path d="M102.2 97.67c2.36 2.36 4.3 4.29 4.31 4.29l3.22 3.21c1.78 1.78 1.29 5.16-1.07 7.53l-48.61 48.6a6.11 6.11 0 0 0 0 8.6l43 43a6.12 6.12 0 0 0 8.61 0l101.56-100.9a6.09 6.09 0 0 0 0-8.59l-101.6-101.64a6.11 6.11 0 0 0-8.6 0l-44.02 44.06a6.11 6.11 0 0 0 0 8.6z" fill="#24aa60"></path>
            <rect x="12.1" y="72.95" width="68.41" height="69.71" rx="6.08" ry="6.08" transform="translate(-62.67 64.32) rotate(-45)" fill="#8bc34a"></rect>
        </svg>
    )
}

export function ArrowRightIcon({
    className,
    alt,
    width,
    height
}: {
    className?: string
    alt: string
    width: string
    height: string
}) {
    return (
        <svg className={`${className}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 16 8">
            <title>{alt}</title>
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
        </svg>
    )
}