import type { CountryMedals } from '../types';

/**
 * Returns an array of country codes sorted alphabetically,
 * based on medals data.
 */
export function getFlagCodeOrder(data: CountryMedals[]): string[] {
    return [...data]
        .map((country) => country.code.toUpperCase())
        .sort((a, b) => a.localeCompare(b));
}
