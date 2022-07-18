import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../components/auth/Login"

test("username input should be rendered", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/johndoe@gmail.com/i);
    expect(emailInput).toBeInTheDocument();
  });

 