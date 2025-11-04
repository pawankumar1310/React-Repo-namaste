import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"

test("should render Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //const loginButton = screen.getByRole("button");
    const loginButton = screen.getByRole("button", {name : "Login"});
    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
});


test("should render Header component with a cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

     const cartItem = screen.getByText("Cart - (0 items)");

    expect(cartItem).toBeInTheDocument();
});


test("should render Header component with a cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    // with regex find cart
     const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();
});

test("should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name : "Logout"});
    expect(logoutButton).toBeInTheDocument();
});