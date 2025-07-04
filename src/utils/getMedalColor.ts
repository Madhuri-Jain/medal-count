import type { SortType } from '../types';

export const getMedalColor = (type: SortType) => {
    switch (type) {
        case 'gold':
            return 'bg-[#f8ecc9]';
        case 'silver':
            return 'bg-[#b9c1e4]';
        case 'bronze':
            return 'bg-[#86785e]';
        case 'total':
            return 'bg-blue-500';
        default:
            return 'bg-gray-300';
    }
};
