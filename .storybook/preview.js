export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: {
            desktop: {
                name: 'desktop',
                styles: {
                    width: '1200px',
                    height: '800px'
                }
            },
            tablet: {
                name: 'tablet',
                styles: {
                    width: '768px',
                    height: '800px'
                }
            },
            mobile: {
                name: 'mobile',
                styles: {
                    width: '320px',
                    height: '760px'
                }
            }
        }
    }
}
