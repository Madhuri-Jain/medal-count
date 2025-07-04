export interface CountryMedals {
    code: string;
    gold: number;
    silver: number;
    bronze: number;
}

export type SortType = 'gold' | 'silver' | 'bronze' | 'total';

export interface MedalTableProps {
    countries: CountryMedals[];
    sortBy?: SortType;
}
