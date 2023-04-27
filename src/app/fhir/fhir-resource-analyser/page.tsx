"use client";

import { useState } from "react";
import { HTMLTable } from "./table";

function Page() {
    const [jsonDocument, setJsonDocument] = useState({})
    const [parseSuccess, setParseSuccess] = useState(false)
    const [parseError, setParseError] = useState("")
    const handleJsonDocument = (event: any) => {
        event.preventDefault()
        setJsonDocument("")
        setParseError("")
        setParseSuccess(false)
        try {
                setJsonDocument(JSON.parse(event.target.jsonDocument.value))
            
            setParseSuccess(true)
        } catch (error) {
            if (error instanceof SyntaxError) {
                setParseError(error.message)
            }
        }
    }

    const presentError = () => {
        if (parseSuccess && parseError !== "") {
            return (
                <span className="text-red-400">{parseError}</span>
            )
        }
    }

    const generateHtml = () => {
        if (parseSuccess) {
            return (
                <HTMLTable data={jsonDocument} />
            )
        }
    }
    return (
        <>
            <main className="flex flex-col items-center justify-between p-24">
                <h1 className="text-xl font-medium">FHIR Resource Analyser</h1>
                <form onSubmit={handleJsonDocument} className="flex flex-col">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">JSON </label>
                    <textarea id="jsonDocument" name="jsonDocument" rows={4} cols={100} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste JSON here..."></textarea>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 py-2 px-4 rounded" type="submit">Analyse</button>
                </form>
                {
                    presentError()
                }
                {
                    generateHtml()
                }
            </main>
        </>
    )
}

export default Page;