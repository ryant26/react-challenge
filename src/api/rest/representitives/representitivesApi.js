import fetchJsonp from 'fetch-jsonp';
import {postcodes} from "./representitivesEndpoints";

// This code uses promises, IE not supported without polyfill
// Postal codes do not map to electoral boundaries, some inaccuracies to be expected
export const findMpByPostalCode = (postalCode) => {
    return fetchJsonp(postcodes(postalCode)).then((response) => {
        if (!response.ok) {
            throw 'error finding representitives by postal code';
        }

        return response.json();
    }).then(({representatives_centroid}) => {
        return representatives_centroid.filter((rep) => rep.elected_office.toLowerCase() === 'mp');
    });
};