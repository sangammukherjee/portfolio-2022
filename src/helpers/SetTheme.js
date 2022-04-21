const setTheme = (themeName) => {
    const selectedCssProps = Array.from(document.styleSheets)
      .reduce(
        (acc, sheet) =>
          (acc = [
            ...acc,
            ...Array.from(sheet.cssRules).reduce(
              (def, rule) =>
                (def =
                  rule.selectorText === ":root"
                    ? [
                        ...def,
                        ...Array.from(rule.style).filter(name =>
                          name.startsWith("--selected")
                        )
                      ]
                    : def),
              []
            )
          ]),
        []
      );

    
    selectedCssProps.forEach(value => {
        document.documentElement.style.setProperty(value, `var(--${themeName}${value.substring(10)})`);
    });
    
    }
    
    export default setTheme;