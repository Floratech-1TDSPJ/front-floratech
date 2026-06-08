# 🌿 FloraTech — Monitoramento Climático Rural

> *"Informação certa, na hora certa, para quem trabalha na terra."*

---

## 📋 Sobre o Projeto

A **FloraTech** é uma plataforma web de monitoramento climático voltada para produtores rurais brasileiros. A solução transforma dados reais de satélites do **INPE** em alertas simples, acessíveis e acionáveis — sem exigir conhecimento técnico do usuário.

O produtor seleciona seu estado e recebe instantaneamente:

- 🔥 **Score de risco** de queimadas: 🟢 Baixo / 🟡 Médio / 🔴 Alto
- 📍 **Focos ativos** registrados por satélite
- 🌧️ **Dias sem chuva** e **precipitação acumulada**
- 🌡️ **Temperatura média** da região
- 📊 **Histórico** dos últimos 5 meses

Este repositório contém o **front-end completo** da plataforma, desenvolvido como entrega da disciplina **Front-End Design Engineering** — Global Solution 2026/1 — FIAP.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Uso |
|-----------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Estrutura semântica das páginas |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Estilização modular e responsividade |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Interatividade, validações e painel dinâmico |
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white) | Versionamento e colaboração |

> ⚠️ **Nenhum framework externo foi utilizado** (sem Bootstrap, jQuery, etc.) — 100% HTML, CSS e JavaScript puros, conforme exigido pela disciplina.

---

## 📄 Páginas do Projeto

| Página | Arquivo | Descrição |
|--------|---------|-----------|
| 🏠 Home | `index.html` | Apresentação da plataforma e chamada para ação |
| ℹ️ Sobre | `sobre.html` | Problema abordado, solução, tecnologias e roadmap |
| 👥 Integrantes | `integrantes.html` | Equipe com RM, turma, foto, LinkedIn e GitHub |
| ❓ FAQ | `faq.html` | 9 perguntas frequentes em formato accordion |
| 📬 Contato | `contato.html` | Formulário funcional com validação completa em JS |
| 🔐 Login | `login.html` | Login com modal de feedback e contagem regressiva |
| 📝 Cadastro | `cadastro.html` | Cadastro com validação de senha e confirmação |
| 🛰️ Monitoramento | `monitoramento.html` | **Painel interativo** de risco climático por estado |
| ⚙️ Como Funciona | `como-funciona.html` | Passo a passo da plataforma + diferenciais competitivos |

---

## ✅ Funcionalidades JavaScript

### 🍔 Menu Responsivo (`menu.js`)
- Menu hambúrguer funcional no mobile
- Abre e fecha ao clicar no ícone
- Fecha automaticamente ao clicar em um link ou redimensionar a janela

### 🪗 Accordion FAQ (`faq.js`)
- Abre um item por vez
- Fecha o item anterior automaticamente
- Animação suave de expansão

### 📋 Validação de Formulário (`contato.js`)
- Bloqueia envio com campos vazios
- Valida formato de e-mail com regex
- Verifica comprimentos mínimos de campos
- Exibe mensagens de erro inline ao lado de cada campo
- Usa `preventDefault()` para controle total do envio

### 🔑 Login com Modal (`login.js`)
- Verifica credenciais contra dados simulados
- Exibe modal de feedback (sucesso ou erro)
- Contagem regressiva de 5 segundos antes do redirecionamento
- Feedback visual diferenciado para cada estado

### 📝 Cadastro com Validação (`cadastro.js`)
- Valida comprimento mínimo de senha
- Confirma correspondência entre senha e confirmação
- Modal de feedback com mensagem personalizada

### 🗺️ Painel de Monitoramento (`monitoramento.js`)
- Seleciona estado via dropdown com todos os 27 estados brasileiros
- Busca dados climáticos simulados (baseados em padrões do INPE)
- Renderiza dinamicamente: score de risco, focos ativos, dias sem chuva, precipitação e temperatura
- Exibe histórico dos últimos 5 meses em cards
- Muda cor e ícone do score de acordo com o nível de risco

---

## 📱 Responsividade

O site é totalmente responsivo, testado nos seguintes breakpoints:

| Dispositivo | Largura | Comportamento |
|-------------|---------|---------------|
| 📱 Mobile | até 480px | Menu hambúrguer, layout em coluna única |
| 📱 Tablet | ≥ 768px | Grid de 2 colunas, imagens hero visíveis |
| 💻 Laptop | ≥ 1024px | Grid de 3 colunas, espaçamentos ampliados |
| 🖥️ Desktop | ≥ 1440px | Layout completo com tipografia escalada |
| 🖥️ 4K | ≥ 2560px | Tudo proporcional, sem quebras |

- ✅ Sem scroll horizontal indesejado
- ✅ Imagens e textos redimensionam corretamente
- ✅ Nenhum elemento cortado ou sobreposto

---

## 🎓 Informações Acadêmicas

| Campo | Informação |
|-------|-----------|
| **Instituição** | FIAP |
| **Curso** | Análise e Desenvolvimento de Sistemas |
| **Turma** | 1TDSPJ (Fevereiro) |
| **Semestre** | 1º Semestre — 2026 |
| **Projeto** | Global Solution 2026/1 |
| **Disciplina** | Front-End Design Engineering |
| **Tema** | O Espaço é a Nova Fronteira — A Economia Espacial |

---

## 👥 Equipe

<table>
  <tr>
    <td align="center">
      <b>João Vitor Cruz de Lima</b><br>
      RM: 571277 · 1TDSPJ<br>
      <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-cruz-de-lima-ba4862219">LinkedIn</a> ·
      <a href="https://github.com/JoaoVitor-2209">GitHub</a>
    </td>
    <td align="center">
      <b>Matheus Ferreira Antônio</b><br>
      RM: 570933 · 1TDSPJ<br>
      <a href="https://www.linkedin.com/in/matheus-ferreira-ant%C3%B4nio-592138365">LinkedIn</a> ·
      <a href="https://github.com/matheusfa08">GitHub</a>
    </td>
    <td align="center">
      <b>Sophia Silveira dos Santos</b><br>
      RM: 571932 · 1TDSPJ<br>
      <a href="https://www.linkedin.com/in/sophia-silveira-9325493a1">LinkedIn</a> ·
      <a href="https://github.com/SophiaS4nt">GitHub</a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>Renato da Silva Tenorio</b><br>
      RM: 572928 · 1TDSPJ<br>
      <a href="https://www.linkedin.com/in/renato-silvagp">LinkedIn</a> ·
      <a href="https://github.com/EUGP2">GitHub</a>
    </td>
    <td align="center">
      <b>Renato Ruiz Ferreira Fonseca Scolamieri</b><br>
      RM: 568667 · 1TDSPJ<br>
      <a href="https://www.linkedin.com/in/renato-ruiz-ferreira-fonseca-scolamieri-32698840b">LinkedIn</a> ·
      <a href="https://github.com/Renatoruiz1">GitHub</a>
    </td>
    <td></td>
  </tr>
</table>

---

## 🔗 Links do Projeto

- 🐙 **Repositório GitHub:** [github.com/FloraTech-1TDSPJ](https://github.com/FloraTech-1TDSPJ)
- 📡 **Fonte de dados:** [INPE — Queimadas](https://queimadas.dgi.inpe.br)
- 🌍 **Tema GS:** [A Economia Espacial — FIAP 2026/1](https://www.fiap.com.br)

---

## 💡 Como Executar

Não há dependências ou build necessários. Basta abrir o projeto localmente:

```bash
# Clone o repositório
git clone https://github.com/FloraTech-1TDSPJ/floratech_front.git

# Navegue até a pasta
cd front-floratech/

# Abra o index.html no navegador
# (ou use o Live Server do VSCode para melhor experiência)
```

> 🔐 **Credenciais de teste para o login:**  
> E-mail: `produtor@floratech.com` · Senha: `12345`

---

## 📬 Contato

Dúvidas ou sugestões? Entre em contato com qualquer membro da equipe pelos links de LinkedIn acima.

---

<p align="center">
  Feito com 🌿 pela equipe FloraTech — FIAP 1TDSPJ · 2026
</p>