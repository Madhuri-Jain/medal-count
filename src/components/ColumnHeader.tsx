import type { SortType, ColumnHeaderProps } from '../types';

export const ColumnHeader = ({ sortBy, onSortChange }: ColumnHeaderProps) => {
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
                        className={`p-2 border cursor-pointer select-none hover:bg-gray-300 ${
                            sortBy === type
                                ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 font-semibold'
                                : ''
                        }`}
                        onClick={() => onSortChange(type)}
                    >
                        {type.toUpperCase()}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
