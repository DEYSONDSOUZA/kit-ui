import Container from "./Conteiners";
import Link from "./Links";
import Botao from "./botoes";
import Input from "./Inputs";
function App() {
    return (
        <Container nomeDaClasse="app">
            <Link href="https://app.devstart.tech/learn/react">Tutorial React</Link>
            <Botao desabilitado={false}>Entre</Botao>
            <Input placeholder="Nome Completo" nome="nome_completo" />
        </Container>
    );
}
export default App