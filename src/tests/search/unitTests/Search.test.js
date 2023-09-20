import React from "react";
import {render, screen, fireEvent, act} from "@testing-library/react";
import Search from '../../../api/search/Search'
import userEvent from "@testing-library/user-event";

const mockedNavigate = jest.fn().mockImplementation((calledWith) => {
        console.log("mockedNavigate was called " + JSON.stringify(calledWith))
    });

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));
describe("Search", () => {
    beforeEach(() => {
        mockedNavigate.mockReset();
    });
    afterEach(() => {
        jest.restoreAllMocks();

    });

    it("user typed five characters, submitHandler and useNavigator were called with expected params", async () => {


        const searchResult = render(<Search/>)
        const submitHandlerMock = jest.fn()
        screen.getByRole("form", {name: "searchForm"}).onsubmit = submitHandlerMock

        await act(async () => {
            const input = screen.getByPlaceholderText('Search-Posts')
            userEvent.type(input, "mango{enter}");
        })

        expect(submitHandlerMock).toHaveBeenCalledTimes(1);
        expect(mockedNavigate).toHaveBeenCalledTimes(1);
        expect(mockedNavigate).toHaveBeenNthCalledWith(1, `/search/mango`);
        expect(searchResult).toMatchSnapshot()

    })

    it("user typed 0 characters, submitHandler called, useNavigator not called, message displayed", async () => {


        const searchResult = render(<Search/>)
        const submitHandlerMock = jest.fn()
        screen.getByRole("form", {name: "searchForm"}).onsubmit = submitHandlerMock

        await act(async () => {
            const input = screen.getByPlaceholderText('Search-Posts')
            userEvent.type(input, "{enter}");
        })

        expect(submitHandlerMock).toHaveBeenCalledTimes(1);
        expect(mockedNavigate).toHaveBeenCalledTimes(0);
        expect(searchResult).toMatchSnapshot()

    })

    it("user typed 1 characters, submitHandler called, useNavigator not called, message displayed", async () => {


        const searchResult = render(<Search/>)
        const submitHandlerMock = jest.fn()
        screen.getByRole("form", {name: "searchForm"}).onsubmit = submitHandlerMock

        await act(async () => {
            const input = screen.getByPlaceholderText('Search-Posts')
            userEvent.type(input, "m{enter}");
        })

        expect(submitHandlerMock).toHaveBeenCalledTimes(1);
        expect(mockedNavigate).toHaveBeenCalledTimes(0);
        expect(searchResult).toMatchSnapshot()

    })

})
