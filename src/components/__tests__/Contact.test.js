import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


test("Should load Contact us component ", ()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});


test("Should load Contact us component ", ()=>{
    render(<Contact/>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test("Should load input in Contact us component ", ()=>{
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("Message");
    expect(inputName).toBeInTheDocument();
});

test("Should load all input in Contact us component ", ()=>{
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
});


describe("Test cases in a Group", ()=>{
    test("Should load Contact us component ", ()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});


test("Should load Contact us component ", ()=>{
    render(<Contact/>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

it("Should load input in Contact us component ", ()=>{
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("Message");
    expect(inputName).toBeInTheDocument();
});

it("Should load all input in Contact us component ", ()=>{
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
});
})