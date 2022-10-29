function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src="./react-logo.png" className="logo" ></img>
                <ul className="nav-items">
                    <li className="nav-li">Preço</li>
                    <li className="nav-li">Sobre</li>
                    <li className="nav-li">Contato</li>
                </ul>
            </nav>
        </header>
    )
}
function MainContent() {
    return (
        <div className="content">
            <h1>Razões para aprender React.js</h1>
            <ol>
                <li>Ganhar dinheiro;</li>
                <li>Começar a trabalhar de verdade;</li>
                <li>Não parece ser difícil.</li>
            </ol>
        </div>
    )
}
function Footer() {
    return (
        <footer className="footer">
            <small>@ 2022 Oliveira Development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div className="body">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
ReactDOM.render(
        <JavaScript />,
    document.getElementById('root')
)


