import {useCallback} from "../../_snowpack/pkg/react.js";
import {useColorMode, useThemeUI} from "../../_snowpack/pkg/theme-ui.js";
const useColourMode = () => {
  const [colourMode, setColourMode] = useColorMode();
  const {
    theme: {rawColors}
  } = useThemeUI();
  const colours = Object.keys(rawColors?.modes ?? {});
  const nextColour = colours.find((c) => c !== colourMode) ?? "";
  const onClickChangeColourMode = useCallback((e) => {
    if (nextColour) {
      setColourMode(nextColour);
    }
  }, [nextColour, setColourMode]);
  return [colourMode, nextColour, onClickChangeColourMode];
};
export default useColourMode;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL1VzZXJzL2FuaHRyYW5kYWMvUHJvamVjdHMvZnJlZF9jb3VudHJpZXNfcGFnZS9zcmMvaG9va3MvdXNlQ29sb3VyTW9kZS50cyJdLAogICJtYXBwaW5ncyI6ICJBQUNBO0FBQ0E7QUFFQSxNQUFNLGdCQUFpRSxNQUFNO0FBQzNFLFFBQU0sQ0FBQyxZQUFZLGlCQUFpQjtBQUNwQyxRQUFNO0FBQUEsSUFDSixPQUFPLENBQUU7QUFBQSxNQUNQO0FBQ0osUUFBTSxVQUFVLE9BQU8sS0FBSyxXQUFXLFNBQVM7QUFDaEQsUUFBTSxhQUFhLFFBQVEsS0FBSyxDQUFDLE1BQU0sTUFBTSxlQUFlO0FBQzVELFFBQU0sMEJBQTBCLFlBQzlCLENBQUMsTUFBa0I7QUFDakIsUUFBSSxZQUFZO0FBQ2Qsb0JBQWM7QUFBQTtBQUFBLEtBR2xCLENBQUMsWUFBWTtBQUdmLFNBQU8sQ0FBQyxZQUFZLFlBQVk7QUFBQTtBQUdsQyxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
