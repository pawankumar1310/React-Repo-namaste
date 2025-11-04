import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json"
import "@testing-library/jest-dom"

it("should render Restaurant card component with Props data", ()=>{
    render(<RestaurantCard restName ={MOCK_DATA}/>)
    const name = screen.getByText("Hotel Farook");
    expect(name).toBeInTheDocument();
});