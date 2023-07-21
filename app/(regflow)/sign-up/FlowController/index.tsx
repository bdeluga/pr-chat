import React from "react";
import { FormUser } from "~/lib/types";
import Username from "./Username";

interface FlowProps {
  user: FormUser;
  step: number;
}

const FlowController = ({ step, user }: FlowProps) => {
  const screens = [Username];

  const Current = screens[step];
  return <Current />;
};

export default FlowController;
