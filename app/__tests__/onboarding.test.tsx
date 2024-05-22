import React from "react";
import { render } from "@testing-library/react-native";
import Onboard from "../Onboard";

describe("Onboard", () => {
  it("Renderiza correctamente los botones 'Siguiente' y 'Comenzar'", () => {
    const onDoneMock = jest.fn();

    const { getByText } = render(<Onboard onDone={onDoneMock} />);

    expect(getByText("CuidadoVeci")).toBeTruthy();
    expect(
      getByText(
        "Podrás Reportar, visualizar y generar alarmas de eventualidades de delincuencia en tu sector."
      )
    ).toBeTruthy();
    expect(getByText("Siguiente")).toBeTruthy();
  });
});
