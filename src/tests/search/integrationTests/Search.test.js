import React from "react";
import {render, screen, fireEvent, act} from "@testing-library/react";
import Search from '../../../api/search/Search'
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";


describe("Search", () => {

    afterEach(() => {
        jest.restoreAllMocks();

    });

    it("user typed five characters", async () => {


        const searchResult = render(<Router>
            <Search/>
            </Router>)

        await act(async () => {
            const input = screen.getByPlaceholderText('Search-Posts')
            userEvent.type(input, "mango{enter}");
        })

        const searchForm = screen.getByRole("form", {name: "searchForm"})
        //expect(searchForm.nextElementSibling).toBe(null)
        //expect(searchResult).toMatchSnapshot()

    })


})