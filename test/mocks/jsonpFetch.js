import fetchJsonp from "fetch-jsonp";
jest.mock('fetch-jsonp', () => jest.fn());

const jsonMock = (data) => {
    return jest.fn().mockImplementation(() => Promise.resolve(data))
};

export const mockFetchSuccess = (data) => {
    fetchJsonp.mockImplementation(() => Promise.resolve({ok: true, json: jsonMock(data)}));
};

export const mockFetchFailure = () => {
    fetchJsonp.mockImplementation(() => Promise.resolve({ok: false, json: jsonMock()}));
};
