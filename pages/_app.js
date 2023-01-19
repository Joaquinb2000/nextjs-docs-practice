import '../styles/globals.css'
import { MantineProvider, Button, Group } from "@mantine/core"


export default function App({ Component, pageProps }) {
    return(
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          colorScheme: "dark",
          components: {
            Button: {
              // Subscribe to theme and component params
              styles: (theme, params) => ({
                root: {
                  height: 42,
                  padding: '0 30px',
                  backgroundColor:
                    params.variant === 'filled'
                      ? theme.colors[params.color || theme.primaryColor][5]
                      : undefined,
                },
              }),
            }
          }
        }}>
        <Component {...pageProps} />
          <Button variant="outline">Outline button</Button>
          <Button variant="filled" color="cyan">Filled button</Button>
      </MantineProvider>
    );
  }
