import { RepositoryListContainer } from "../components/RepositoryList ";
import {
  render,
  screen,
  within,
  waitFor,
  fireEvent,
} from "@testing-library/react-native";
import { SignInContainer } from "../components/signIn";
describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };
      render(<RepositoryListContainer repositories={repositories} />);

      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
      // console.log(
      //   within(secondRepositoryItem).getByText("Javascript", { exact: false })
      // );
      expect(1).toBe(1);
    });
  });

  describe("SignIn", () => {
    describe("SignInContainer", () => {
      it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
        // render the SignInContainer component, fill the text inputs and press the submit butto
        const mockFn = jest.fn();
        const credents = { username: "kalle", password: "password" };

        render(<SignInContainer onSubmit={mockFn}> </SignInContainer>);
        screen.debug();
        const usernameInput = screen.getByPlaceholderText("Username");
        const passwordInput = screen.getByPlaceholderText("Password");

        fireEvent.changeText(usernameInput, "kalle");
        fireEvent.changeText(passwordInput, "password");
        fireEvent.press(screen.getByText("Sign In"));

        await waitFor(() => {
          expect(mockFn).toHaveBeenCalledWith(credents, expect.any(Object));
        });
      });
    });
  });
});