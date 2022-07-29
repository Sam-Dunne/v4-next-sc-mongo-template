const height = {
    nav : '15vh',
    main: '85vh',
    footer: '10vh'
}

export const layout = {
    nav: `(min-height: ${height.nav})`,
    main: `(min-height: ${height.main})`,
    footer: `(min-height: ${height.footer})`
}