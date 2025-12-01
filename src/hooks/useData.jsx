import { useEffect, useState } from "react";
import fetchResults from "../utils/fetchResults";

export default function useData(query, page) {
    const [results, setResults] = useState([]);

    // useEffect(() => {
    //     /* Timeline:
    //         Time 1: Search for "React"
    //         └─ ignore = false (don't ignore this response)

    //         Time 2: User changes to "Vue" BEFORE React response arrives
    //         └─ Cleanup runs → ignore = true (NOW ignore the React response!)

    //         Time 3: React response arrives
    //         └─ Checks if(!ignore) → if(!true) → false
    //         └─ Skips setResults() → Response is IGNORED ✓

    //         Time 4: Vue response arrives
    //         └─ ignore is still false (new effect instance)
    //         └─ Checks if(!ignore) → if(!false) → true
    //         └─ Runs setResults() → Vue data updates ✓
    //     */
    //     let ignore = false;

    //     fetchResults(query, page).then((json) => {
    //         if (!ignore) {
    //             setResults(json);
    //         }
    //     });

    //     // cleanup
    //     return () => {
    //         ignore = true;
    //     };
    // }, [query, page]);

    useEffect(() => {
        const controller = new AbortController();

        fetchResults(query, page, controller.signal)
            .then((json) => {
                setResults(json);
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    console.error(error);
                }
            });

        return () => controller.abort();  // ← Cancel fetch if component unmounts
    }, [query, page]);

    return results;
}