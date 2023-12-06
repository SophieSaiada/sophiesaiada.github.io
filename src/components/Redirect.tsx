import { useEffect } from "react";
import { navigate } from "gatsby";

export default function Redirect({ to }) {
  useEffect(() => {
    navigate(to, { replace: true });
  }, []);
  return null;
}
