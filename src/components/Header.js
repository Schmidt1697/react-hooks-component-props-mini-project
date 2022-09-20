const Header = ({name}) => {

    return (
        <header>
            <h1 key={name}>{name}</h1>
        </header>
    )
}

export default Header;