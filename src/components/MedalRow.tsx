import type { MedalRowProps } from '../types';

const FLAGHEIGHT = 17;

export const MedalRow = ({ country, index, flagIndex }: MedalRowProps) => {
    const total = country.gold + country.silver + country.bronze;
    const yOffset = flagIndex >= 0 ? -flagIndex * FLAGHEIGHT : 0;

    return (
        <tr className="hover:bg-gray-50 transition">
            <td className="p-2 border">{index + 1}</td>
            <td className="p-2 border">
                <div
                    className="w-7 h-4 bg-no-repeat"
                    style={{
                        backgroundImage: `url('/flags.png')`,
                        backgroundPosition: `0px ${yOffset}px`,
                        backgroundSize: '100% auto',
                        transform: 'scale(1.5)', // slightly enlarge
                        transformOrigin: 'top left',
                    }}
                />
            </td>
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
