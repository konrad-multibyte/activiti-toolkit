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
        <div className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 215 215">
                <title>{alt}</title>
                <path d="M102.2 97.67c2.36 2.36 4.3 4.29 4.31 4.29l3.22 3.21c1.78 1.78 1.29 5.16-1.07 7.53l-48.61 48.6a6.11 6.11 0 0 0 0 8.6l43 43a6.12 6.12 0 0 0 8.61 0l101.56-100.9a6.09 6.09 0 0 0 0-8.59l-101.6-101.64a6.11 6.11 0 0 0-8.6 0l-44.02 44.06a6.11 6.11 0 0 0 0 8.6z" fill="#24aa60"></path>
                <rect x="12.1" y="72.95" width="68.41" height="69.71" rx="6.08" ry="6.08" transform="translate(-62.67 64.32) rotate(-45)" fill="#8bc34a"></rect>
            </svg>
        </div>
    )
}