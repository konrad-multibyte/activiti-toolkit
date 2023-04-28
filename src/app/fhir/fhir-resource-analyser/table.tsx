import { FhirTypeDef } from "../../links"

export function HTMLTable(data: any) {

    const resourceMap = () => {
        const resources = []
        for (let resource in data.data.resources) {
            const otherAttrs = []
            const clone = (({ variableNameForStoringResourceId, type, mappings, ...o }) => o)(data.data.resources[resource])
            if (Object.keys(clone).length !== 0) {
                for (const [key, value] of Object.entries(clone)) {
                    otherAttrs.push(
                        <p className="text-xl font-medium">{key}: <code>{String(value)}</code></p>
                    )
                }
            }
            resources.push(
                <div>
                    <h4 className="text-2xl font-medium">resource: <code>{data.data.resources[resource].variableNameForStoringResourceId}</code></h4>
                    <p className="text-xl font-medium">type: <code>{data.data.resources[resource].type}</code> &lt;<FhirTypeDef type={data.data.resources[resource].type} />&gt;</p>
                    {
                        otherAttrs
                    }
                    <RenderHTMLTable mappings={data.data.resources[resource].mappings} />
                   
                </div>
            )
        }
        return resources
    }
    return (
        <div>
            <p className="text-3xl">HTML Preview</p>
            <p className="text-xl font-medium">version: <code>{data.data.version}</code></p>
            {
                resourceMap()
            }
        </div>
    )
}

function RenderHTMLTable(mappings: any) {
    const header = []
    const rows = []
    for (let m in Object.keys(mappings.mappings)) {
        const keys = Object.keys(mappings.mappings[m])
        for (const [key, value] of Object.entries(keys)) {
            if (header.indexOf(value) === -1) {
                header.push(value)
            }
        }
    }
    for (var i = 0; i < mappings.mappings.length; i++) {
        const row = []
        for (let column of header) {
            row.push(
                <td className="p-1 border-solid border-2 border-black-600">
                    {mappings.mappings[i][column]}
                </td>
            )
        }
        rows.push(
            <tr>
                {row}
            </tr>
        )
    }
    return (
        <table className="border-soild border-2 border-black-600">
            <thead>
                <tr className=" border-soild border-2 border-black">
                    {header.map((column, i) => {
                        return (
                            <th className="p-1 border-solid border-2 border-black-600" key={i}>{column}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}