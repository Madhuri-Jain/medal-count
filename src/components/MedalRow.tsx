import type { CountryMedals } from '../types';

interface MedalRowProps {
    country: CountryMedals;
    index: number;
}

export const MedalRow = ({ country, index }: MedalRowProps) => {
    const total = country.gold + country.silver + country.bronze;

    return (
        <tr className="hover:bg-gray-50 transition">
            <td className="p-2 border">{index + 1}</td>
            <td className="p-2 border">Flag Image</td>
            <td className="p-2 border font-medium">{country.code}</td>
            <td className="p-2 border text-yellow-600 font-semibold">
                {country.gold}
            </td>
            <td className="p-2 border text-gray-500 dark:text-gray-200">
                {country.silver}
            </td>
            <td className="p-2 border text-orange-600">{country.bronze}</td>
            <td className="p-2 border font-bold">{total}</td>
        </tr>
    );
};
