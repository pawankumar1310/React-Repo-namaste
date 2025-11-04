import {screen, render, fireEvent } from "@testing-library/react";
import Body from "../Body"
import MOCK_DATA from "../mocks/restaurantListDataMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

// It will exact math the fetch funtion inside the Body
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

beforeAll(()=>{
    console.log("Before all");
})

beforeEach(()=>{
    console.log("Before Each");
})



it("Should render the body component with Search for 'The' input", async() => {
    await act(async ()=> render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));
   
    const cardsBeforeSearch = screen.getAllByTestId("restCard");
    expect(cardsBeforeSearch.length).toBe(7);

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target : {value : "The"}});

    const searchButton = screen.getByRole("button", {name : "Search"});
    fireEvent.click(searchButton);

    const cardsAfterSearch = screen.getAllByTestId("restCard");
    //screen should load 2 cards after searching 'The' word in search input.
    expect(cardsAfterSearch.length).toBe(2);

});

afterAll(()=>{
    console.log("After All");
})


afterEach(()=>{
    console.log("After Each");
})