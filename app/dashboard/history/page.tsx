"use client"
import { db } from "@/utils/Db";
import { AIOutput } from "@/utils/Schema";
import React, { useEffect, useState } from 'react';

interface Script {
    id: number;
    templateSlug: string;
    aiResponse: string | null;
    createdAt: string | null;
    shortAiResponse: string | null; 
}

const ScriptsComponent = () => {
    const [scripts, setScripts] = useState<Script[]>([]);

    async function fetchAllScripts() {
        try {
            const fetchedScripts = await db.select().from(AIOutput);
            return fetchedScripts.map(script => ({
                id: script.id,
                templateSlug: script.templateSlug,
                aiResponse: script.aiResponse,
                createdAt: script.createdAt,
                shortAiResponse: getShortAiResponse(script.aiResponse) 
            }));
        } catch (error) {
            console.error('Failed to fetch scripts:', error);
            throw error;
        }
    }

    const getShortAiResponse = (aiResponse: string | null): string | null => {
        if (!aiResponse) return null;
        const paragraphs = aiResponse.split('\n\n');
        const firstThreeParagraphs = paragraphs.slice(0, 3).join('\n\n');
        return firstThreeParagraphs;
    };

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Copied to clipboard!');
        } catch (error) {
            console.error('Failed to copy:', error);
            alert('Failed to copy to clipboard.');
        }
    };

    useEffect(() => {
        const loadScripts = async () => {
            try {
                const fetchedScripts = await fetchAllScripts();
                setScripts(fetchedScripts);
            } catch (error) {
                console.error('Error loading scripts:', error);
            }
        };
        loadScripts();
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Scripts</h1>
            <div className="grid grid-cols-3 gap-4 border border-gray-300 rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-4 border-r border-gray-300">
                    <p className="font-semibold">Template</p>
                </div>
                <div className="bg-gray-100 p-4 border-r border-gray-300">
                    <p className="font-semibold">AI Response (Truncated)</p>
                </div>
                <div className="bg-gray-100 p-4">
                    <p className="font-semibold">Created At</p>
                </div>
                {scripts.map(script => (
                    <React.Fragment key={script.id}>
                        <div className="p-4 border-t border-gray-300">{script.templateSlug}</div>
                        <div className="p-4 border-t border-gray-300">
                            <div>{script.shortAiResponse}</div>
                            {script.aiResponse && (
                                <button
                                    className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => copyToClipboard(script.aiResponse!)}
                                >
                                    Copy Full Response
                                </button>
                            )}
                        </div>
                        <div className="p-4 border-t border-gray-300">{script.createdAt}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ScriptsComponent;