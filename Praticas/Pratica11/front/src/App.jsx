import from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/home" element={<Home />} />
      <Route path="/perfil/:id" element={<Perfil />} />
      <Route path="*" element={<Erro404 />} />
    </BrowserRouter>

  );
}

export default App;