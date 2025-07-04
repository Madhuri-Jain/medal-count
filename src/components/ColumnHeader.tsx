import type { SortType, ColumnHeaderProps } from '../types';
import { getMedalColor } from '../utils/getMedalColor';

export const ColumnHeader = ({ sortBy, onSortChange }: ColumnHeaderProps) => {
    const headers: SortType[] = ['gold', 'silver', 'bronze', 'total'];

    return (
        <thead>
            <tr className="bg-gray-200 text-left text-gray-00 dark:text-gray-800">
                <th></th>
                <th></th>
                <th className="px-15"></th>
                {headers.map((type) => (
                    <th
                        key={type}
                        title={`Sort by ${type} medals`}
                        className={`p-2 cursor-pointer select-none hover:bg-gray-300 ${
                            sortBy === type
                                ? 'border-t-4 border-gray-500 font-semibold  dark:border-blue-500'
                                : ''
                        }`}
                        onClick={() => onSortChange(type)}
                    >
                        {type === 'total' ? (
                            type.toUpperCase()
                        ) : (
                            <div
                                className={`w-10 h-10 rounded-full ${getMedalColor(type)}`}
                                aria-hidden
                            ></div>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
