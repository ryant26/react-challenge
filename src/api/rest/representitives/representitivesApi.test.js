import {mockFetchSuccess, mockFetchFailure} from "../../../../test/mocks/jsonpFetch";
import {findMpByPostalCode} from "./representitivesApi";
import fetchJsonp from 'fetch-jsonp';

describe('Representatives API', () => {

    beforeEach(() => {
        mockFetchSuccess({representatives_centroid: []})
    });

    afterEach(() => {
        fetchJsonp.mockReset();
    });

    describe('findMpByPostalCode', () => {
        it('should return only MP representatives', () => {
            const MpRep = {
                elected_office: 'MP'
            };

            const nonMpRep = {
                elected_office: 'not MP'
            };

            mockFetchSuccess({representatives_centroid: [MpRep, nonMpRep, MpRep]});

            return findMpByPostalCode('somePostalCode').then((result) => {
                expect(result).toHaveLength(2);
                expect(result).toContain(MpRep);
                expect(result).not.toContain(nonMpRep);
            });
        });

        it('should throw an error when the response is not 200', () => {
            mockFetchFailure();

            return findMpByPostalCode('somePostalCode').then(() => {
                throw 'expected to throw an error';
            }).catch((err) => {
                expect(err).toEqual(new Error('error finding representatives by postal code'));
            });
        });
    });
});