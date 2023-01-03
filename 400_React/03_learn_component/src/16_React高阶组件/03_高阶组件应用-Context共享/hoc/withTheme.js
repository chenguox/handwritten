import ThemeContext from "../context/theme_context"

function withTheme(OriginComponent) {
  function NewComponent(props) {
    return (
      <ThemeContext.Consumer>
        {
          value => {
            return <OriginComponent {...value} {...props} />
          }
        }
      </ThemeContext.Consumer>
    )
  }

  return NewComponent
}

export default withTheme