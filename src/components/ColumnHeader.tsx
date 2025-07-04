import type { SortType } from '../types';

export const ColumnHeader = () => {
    const headers: SortType[] = ['gold', 'silver', 'bronze', 'total'];

    return (
        <thead>
            <tr className="bg-gray-200 text-left">
                <th className="p-2 border">Rank</th>
                <th className="p-2 border">Flag</th>
                <th className="p-2 border">Country</th>
                {headers.map((type) => (
                    <th
                        key={type}
                        className="p-2 border cursor-pointer hover:bg-gray-300"
                    >
                        {type.toUpperCase()}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
