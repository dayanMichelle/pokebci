import { render } from "@testing-library/react";
import { pokemonMock } from "../../test/mocks/pokemonMock";
import { ListSkills } from "./ListSkills";

describe("ListSkills", () => {
  test("renders list skills", () => {
    const skills = pokemonMock.fire.moves.slice(0,4)
    const { getByText } = render(<ListSkills skills={skills} />);

    skills.forEach( skill => {
      const componentElement = getByText(skill);
      expect(componentElement).toBeInTheDocument();
    })
  });
});
