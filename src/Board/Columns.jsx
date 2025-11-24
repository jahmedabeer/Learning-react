import { useState } from "react";
import Column from "./Column";
import ColumnHeader from "./ColumnHeader";

export default function Columns({ status, label }) {
    const [sortOrder, setSortOrder] = useState(null);

    return (

        <div className="flex-1 flex flex-col min-w-0 w-full">
            <ColumnHeader status={status} label={label} sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <Column status={status} sortOrder={sortOrder} />
        </div>
    );
}