import React from "react";
import {render, screen, fireEvent, act} from "@testing-library/react";
import Search from '../../../api/search/Search'
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

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

        const searchForm = screen.getByRole("form", {name: "searchForm"})
        expect(searchForm.nextElementSibling).toBe(null)
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
        const searchForm = screen.getByRole("form", {name: "searchForm"})
        console.dir(searchForm)


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

   it("user clicked on input to make it onFocus, FiSearch className changes to 'focus'", async () => {


          const {container,  debug} = render(<Search/>)

       const searchForm = screen.getByRole("form", {name: "searchForm"})

          await act(async () => {
              const input = screen.getByPlaceholderText('Search-Posts')
              userEvent.click(input,undefined, {skipHover: true});

          })
        expect(searchForm.firstChild).toHaveClass("focus")
      })

      it("user , FiSearch className changes to 'focus'", async () => {


          const {container, debug} = render(<Search/>)
          const searchForm = screen.getByRole("form", {name: "searchForm"})

          await act(async () => {
              const input = screen.getByPlaceholderText('Search-Posts')
              userEvent.click(input,undefined, {skipHover: true});
          })
          await act(async () => {
              const inputForm = screen.getByRole("form", {name: "searchForm"})
              userEvent.click(inputForm, undefined, {skipHover: true})
          })

          expect(searchForm.firstChild).toHaveClass("searchFont")
    })



})
