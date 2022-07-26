import { useMemo } from "react"
import { getPagesCount } from "../utils/pages";

export const usePagination = (totalPages, limit) => {
    return useMemo(() => {
        const pagesCount = getPagesCount(totalPages, limit);
        const pages = [];
        for (var i = 1; i <= pagesCount; i++) pages.push(i);
        return pages;
    }, [totalPages, limit])
}