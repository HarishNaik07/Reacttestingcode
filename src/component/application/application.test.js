import { render} from "@testing-library/react";
import { screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application",()=>{
    test("renders correctly",()=>{
        render(<Application/>);
         
        // const pageHeading=screen.getByRole("heading",{
        //     name:"Job application form",
        // });
        // expect(pageHeading).toBeInTheDocument();

        // const sectionHeading=screen.getByRole("heading",{
        //     name:"Section 1",
        // });
        // expect(sectionHeading).toBeInTheDocument();

        // const nameElement = screen.getByRole("textbox", { name: /name/i });
        // expect(nameElement).toBeInTheDocument();


        // const jobLocationElement=screen.getByRole("combobox");
        // expect(jobLocationElement).toBeInTheDocument();

        // const termElement=screen.getByRole("checkbox");
        // expect(termElement).toBeInTheDocument();

        // const submitButtonElement=screen.getByRole("button");
        // expect(submitButtonElement).toBeInTheDocument();
  
        const nameElement2=screen.getByText("Name");
        expect(nameElement2).toBeInTheDocument();

        const termElement2=screen.getByLabelText("I agree to the terms and conditions");
        expect(termElement2).toBeInTheDocument();

        const nameElement3=screen.getByPlaceholderText("Fullname");
        expect(nameElement3).toBeInTheDocument();


        const paragraph=screen.getByText("All fields are mandatory");
        expect(paragraph).toBeInTheDocument();

       const display=screen.getByDisplayValue("Harish");
       expect(display).toBeInTheDocument();

       const altattribute=screen.getByAltText("a person with a laptop");
       expect(altattribute).toBeInTheDocument();

       const titletext=screen.getByTitle("close");
       expect(titletext).toBeInTheDocument();

       const dataId=screen.getByTestId("custom-element");
       expect(dataId).toBeInTheDocument();


    });
});

