# Plataforma Integrada com Google Sheets

## ✅ Funcionalidades
- Criação e atribuição de usuários.
- Atualização de status de leads (Fechado, Perdido, Reaberto).
- Sincronização bidirecional com Google Sheets.
- Leads persistem na planilha e não são mais perdidos ao recarregar a página.

---

## 🛠️ Como rodar o projeto React

1. Instale as dependências:
   npm install

2. Rode o servidor local:
   npm run dev

---

## 📡 Como configurar a integração com Google Sheets

1. Acesse sua planilha do Google com as abas:
   - `Leads`: com colunas `ID`, `Nome`, `Telefone`, `Status`, `Vendedor`, etc.
   - `Usuarios`: com colunas `Nome`, `Email`, `Tipo`, `DataCadastro`.

2. No menu da planilha, clique em **Extensões > Apps Script**.

3. Apague qualquer código existente e cole o seguinte script: 
(veja documentação do projeto para o código completo)

4. Clique em **Implantar > Nova implantação > Web App**:
   - Execute como: `Eu mesmo`
   - Acesso: `Qualquer pessoa`

5. Copie o link gerado e substitua no código React em:
   `src/services/leadService.jsx` na constante `baseUrl`.

---

## 📁 Estrutura

- `/src/pages/LeadsFechados.jsx` — Visualiza e reabre leads fechados.
- `/src/pages/LeadsPerdidos.jsx` — Visualiza e reabre leads perdidos.
- `/src/services/leadService.jsx` — Integração com Google Sheets.
- `App.jsx` — Integra as funções e distribui por rotas.

---

Qualquer dúvida é só me chamar por aqui.
