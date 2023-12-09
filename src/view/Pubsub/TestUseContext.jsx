import React, { useState, useContext } from "react";
const themes = {
  light: {
    background: "#fff",
  },
  dark: {
    background: "#000",
  },
};
const ThemesContext = React.createContext(themes.light);
function TestUseContext() {
  const themeCtx = useContext(ThemesContext);
  return (
    <button style={{ backgroundColor: themeCtx.background }}>按钮颜色</button>
  );
}

export default function ThemesShow() { 
  const [themesName, setThemesName] = useState(themes.light);
  return (
    <ThemesContext.Provider value={themesName}>
      <button onClick={() => setThemesName(themes.dark)}>变成黑的</button>
      <TestUseContext></TestUseContext>
    </ThemesContext.Provider>
  );
}
