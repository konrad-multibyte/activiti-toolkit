import { LinkExternal } from "../links"

export default function Page() {
    return (
        <main className="flex flex-col flex-grow items-center justify-between p-24">
            <div className="text-justify px-20 pr- space-y-5">
                <h1 className="text-center text-3xl">
                    License
                </h1>
                <p className="text-center">
                    This is free and unencumbered software released into the public domain.
                </p>
                <p>
                    Anyone is free to copy, modify, publish, use, compile, sell, or
                    distribute this software, either in source code form or as a compiled
                    binary, for any purpose, commercial or non-commercial, and by any
                    means.
                </p>
                <p>
                    In jurisdictions that recognize copyright laws, the author or authors
                    of this software dedicate any and all copyright interest in the
                    software to the public domain. We make this dedication for the benefit
                    of the public at large and to the detriment of our heirs and
                    successors. We intend this dedication to be an overt act of
                    relinquishment in perpetuity of all present and future rights to this
                    software under copyright law.
                </p>
                <p>
                    THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,
                    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
                    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                    OTHER DEALINGS IN THE SOFTWARE.
                </p>
                <p>For more information, please refer to{" "}
                    <LinkExternal className="text-blue-600 underline" href="http://unlicense.org" text="http://unlicense.org" />
                    {/* <http://unlicense.org/> */}
                </p>
            </div>
        </main>
    )
}