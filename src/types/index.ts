export interface CountryMedals {
    code: string;
    gold: number;
    silver: number;
    bronze: number;
}

export type SortType = 'gold' | 'silver' | 'bronze' | 'total';

export interface MedalTableProps {
    countries: CountryMedals[];
    sortBy: SortType;
    onSortChange: (s: SortType) => void;
}

export interface ColumnHeaderProps {
    sortBy: SortType;
    onSortChange: (type: SortType) => void;
}

export interface MedalRowProps {
    country: CountryMedals;
    index: number;
    flagIndex: number;
}
