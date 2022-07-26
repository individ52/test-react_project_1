import React from 'react';
import cls from "./MainPagination.module.css";
const MainPagination = ({ totalPages, currentPage, setPage }) => {

    return (
        <div className={cls["pagination"]}>
            {totalPages.map(page => {
                const classes = [cls["pagination-item"]];
                if (page === currentPage) classes.push(cls["active"]);
                return <div
                    key={page}
                    onClick={() => setPage(page)}
                    className={classes.join(" ")}
                >{page}</div>
            })}
        </div >
    )
}
export default MainPagination;